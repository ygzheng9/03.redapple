import { Component, OnInit } from '@angular/core';

import {FulfilmentService, IOrderItem} from "../fulfilment.service";

import _ from "lodash";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.less']
})
export class OrderComponent implements OnInit {
  soItemList: IOrderItem[] =  [];
  fileList: [];
  orderNum = '';

  isAllDisplayDataChecked = false;
  isIndeterminate = false;

  mapOfCheckedId: { [key: number]: boolean } = {};

  constructor(private message: NzMessageService,
              private svc: FulfilmentService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.soItemList.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.soItemList.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.soItemList.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  getAllSelect() {
    return this.soItemList.filter(item => this.mapOfCheckedId[item.id]);
  }

  getAllItems() {
    this.svc.getAllOrders(this.orderNum).subscribe(res => {
      this.soItemList = res.items;
    });
  }

  // 分配库存
  doAlloc() {
    this.svc.doAlloc().subscribe( res => {
      this.message.success("分配完成");
      this.getAllItems();
    }, err => {
      this.message.error("分配失败");
    }) ;
  }

  // 确认收货
  confirmDelivery() {
    // 选中行对应的单号
    let selections = this.getAllSelect();

    let orderNums = _.uniq(_.map(selections, 'orderNum'));
    if (_.size(orderNums) === 0) {
      this.message.info("请选中待发货的行项目");
      return;
    }

    // 选中，但是未整单齐套的单号
    let outstandings = _.filter(selections,
      (itm) => { return (itm.orderQty !== itm.allocQty) });
    let badNums = _.uniq(_.map(outstandings, 'orderNum'));

    // 仅仅是齐套的订单；
    let fullsets = _.difference(orderNums, badNums);
    if (_.size(fullsets) > 0) {
      this.svc.doDeliver(fullsets).subscribe( data => {
        this.message.success('出库完毕');
        this.getAllItems();
      }, err => {
        this.message.error('出库异常');
      });
    }

    // 未齐套的订单不发货
    if (_.size(badNums) > 0) {
      let msg = _.join(badNums, ',');
      msg = msg + ' 库存不足，不能发货';
      this.message.error(msg);
    }
  }
}

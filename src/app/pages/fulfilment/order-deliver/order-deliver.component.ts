import { Component, OnInit } from '@angular/core';
import {FulfilmentService, IOrderItem} from "../fulfilment.service";

import _ from "lodash";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-order-deliver',
  templateUrl: './order-deliver.component.html',
  styleUrls: ['./order-deliver.component.less']
})
export class OrderDeliverComponent implements OnInit {

  soItemList: IOrderItem[] = [];
  orderNum: string = '';

  isAllDisplayDataChecked = false;
  isIndeterminate = false;

  mapOfCheckedId: { [key: number]: boolean } = {};

  constructor(private svc: FulfilmentService,
              private message: NzMessageService,) { }

  ngOnInit(): void {
    this.allDelivered();
  }

  allDelivered() {
    this.svc.allDelivered(this.orderNum).subscribe(res => {
      this.soItemList = res.items;
    })
  }

  cancelDelivery() {
    let orderNums = _.uniq(_.map(this.getAllSelect(), 'orderNum'));

    this.svc.cancelDelivery(orderNums).subscribe(res => {
      this.message.success("取消发货成功");
      this.allDelivered();
    }, err => {
      this.message.success("操作失败");
    })
  }

  getAllSelect() {
    return this.soItemList.filter(item => this.mapOfCheckedId[item.id]);
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
}

import { Component, OnInit } from '@angular/core';
import {FulfilmentService, IAllocInfo} from "../fulfilment.service";
import {NzMessageService} from "ng-zorro-antd";

import _ from "lodash";

@Component({
  selector: 'app-order-alloc',
  templateUrl: './order-alloc.component.html',
  styleUrls: ['./order-alloc.component.less']
})
export class OrderAllocComponent implements OnInit {
  allocationList: IAllocInfo[] =  [];
  materialCode: string = '';

  isAllDisplayDataChecked = false;
  isIndeterminate = false;

  mapOfCheckedId: { [key: number]: boolean } = {};

  constructor(private message: NzMessageService,
              private svc: FulfilmentService) { }

  ngOnInit(): void {
    this.allAlloc();
  }

  allAlloc() {
    this.svc.allAlloc(this.materialCode).subscribe(res => {
      this.allocationList = res.items;
    })
  }

  cancelAlloc() {
    let ids = _.uniq(_.map(this.getAllSelect(), 'id'));
    if (ids.length === 0) {
      this.message.info("请选择需要取消的行项目");
      return;
    }

    this.svc.cancelAlloc(ids).subscribe(res => {
      this.message.success("取消分配完成");
      this.allAlloc();
    }, err => {
      this.message.error("操作失败");
    })
  }

  getAllSelect() {
    return this.allocationList.filter(item => this.mapOfCheckedId[item.id]);
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.allocationList.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.allocationList.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.allocationList.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

}


import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

interface Ret<T> {
  status: string;
  items: T[];
}

// 订单行项目
export interface IOrderItem {
  id: number;
  orderNum: string;
  itemSeq: string;
  placeDate: string;
  customerCode: string;
  materialCode: string;
  orderQty: number;
  allocQty: number;
  deliveryCustomer: string;
  deliveryAddr: string;
  deliveryPhone: string;
  remark: string;
}

// 物料移动行项目
export interface IMovementItem {
  id: number;
  orderNum: string;
  itemSeq: string;
  movementDate: string;
  movementType: string;
  materialCode: string;
  movementQty: number;
  allocQty: number;
  operateUser: string;
  operateDate: string;
}

// 库存水平行项目
export interface IInventoryLevelItem {
  id: number;
  materialCode: string;
  totalQty: number;
  allocQty: number;
  avlQty: number;
}

export interface IAllocInfo {
  id: number;
  soItmId: string;
  movementId: number;
  customerCode: string;
  materialCode: string;
  orderNum: string;

  itemSeq: number;
  allocType: string;
  allocQty: number;
  allocDate: string;
  allocUser: string;
}


@Injectable({
  providedIn: 'root'
})
export class FulfilmentService {
  prefix = '/api/fulfil';

  constructor(private http: HttpClient) {}

  // 所有明细
  getAllOrders(orderNum: string ){
    let cmd = `${this.prefix}/allSoItems?p=${orderNum}`;
    return this.http.get<Ret<IOrderItem>>(cmd);
  }

  doDeliver(orderNums: string[]) {
    return this.http.post(`${this.prefix}/doDeliver`, orderNums);
  }

  // 已发货明细
  allDelivered(orderNum: string ){
    let cmd = `${this.prefix}/allDelivered?p=${orderNum}`;
    return this.http.get<Ret<IOrderItem>>(cmd);
  }

  cancelDelivery(orderNums: string[]) {
    return this.http.post(`${this.prefix}/cancelDelivery`, orderNums);
  }

  doAlloc() {
    return this.http.get(`${this.prefix}/doAlloc`);
  }

  // 获取物料移动明细
  getAllMovements(materialCode: string) {
    let cmd = `${this.prefix}/allMovements?p=${materialCode}`;
    return this.http.get<Ret<IMovementItem>>(cmd);
  }

  // 获取库存水平
  getInventory(materialCode : string) {
    let cmd = `${this.prefix}/inventoryLevel?p=${materialCode}`;
    return this.http.get<Ret<IInventoryLevelItem>>(cmd);
  }

  getAllocByMat(materialCode: string) {
    let cmd = `${this.prefix}/allocByMat?p=${materialCode}`;
    return this.http.get<Ret<IAllocInfo>>(cmd);
  }

  allAlloc(materialCode: string) {
    let cmd = `${this.prefix}/allAlloc?p=${materialCode}`;
    return this.http.get<Ret<IAllocInfo>>(cmd);
  }

  cancelAlloc(ids: number[]) {
    return this.http.post(`${this.prefix}/cancelAlloc`, ids);
  }


}

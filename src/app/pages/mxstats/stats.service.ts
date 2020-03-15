/**
 * Created by YongGang on 2017/4/9.
 */

import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

interface Ret<T> {
  status: string;
  items: T[];
}

import { TxDetail } from './txDetail';
import { Segment } from './segment';
import { DailySales } from './dailySales';

@Injectable({
  providedIn: 'root'
})
export class StatsDataService {
  constructor(private http: HttpClient) {}

  // 所有明细
  getAllDetails(){
    return this.http
               .get<Ret<TxDetail>>('/api/mxstats');
  }

  // 按客户提单数量 groupby
  showSegments() {
    return this.http
               .get<Ret<Segment>>('/api/mxstats/segments');
  }

  // 按提单数量 groupBy，1,2,3,4~5,6~10，10+
  prettySegments() {
    return this.http
               .get<Ret<Segment>>('/api/mxstats/segmentsReArrage');
  }

  // 某一个提单数量的客户清单
  drillBySegment(segment: Number) {
    const cmd = '/api/mxstats/custBySeg?p=' + segment;
    return this.http
               .get<Ret<string>>(cmd);
  }

  // 某个客户的提单清单
  drillByCust(cust: String) {
    const cmd = '/api/mxstats/findByCust?p=' + cust;

    return this.http
               .get<Ret<TxDetail>>(cmd);
  }

  // 取得每天的客户数，提单数
  getDailySales() {
    const cmd = '/api/mxstats/dailySales';

    return this.http
               .get<Ret<DailySales>>(cmd);
  }
}

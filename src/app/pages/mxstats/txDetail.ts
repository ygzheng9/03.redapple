/**
 * Created by YongGang on 2017/4/9.
 */

// 一个文件只 export 一个就没问题，如果多个，就会报错。

export interface TxDetail {
  id: number;
  biz_date: Date;
  biz_time: string;
  bl_num: string;
  cust_nme: string;
}

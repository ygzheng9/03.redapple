import { Component, OnInit } from '@angular/core';


interface ITransactionItem {
  bizType?: string;
  orderNum: string;
  placeDate: string;
  buyer: string;
  orderAmt: number;
  requireDate: string;

  confirmBy?: string;
  confirmDate?: string;

  shipper?: string;
  shipOrder?: string;
  outDate?: string;

  receiveDate?: string;
}

interface IInvItem {
  invNum: string;
  invType: string;
  taxRate: number;
  invAmt: number;

  invDate: string;

  receiveDate: string;
  receiveBy: string;
}


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.less']
})
export class TransactionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openItems: ITransactionItem[] = [
    {
      orderNum: "A00304",
      placeDate: "2019-11-29",
      buyer: "泰瑞宝",
      orderAmt: 300,
      requireDate: "2020-02-20"
    },
    {
      orderNum: "A00305",
      placeDate: "2019-12-05",
      buyer: "泰瑞宝",
      orderAmt: 400,
      requireDate: "2020-01-20"
    }
  ];

  confirmItems: ITransactionItem[] = [
    {
      orderNum: "A00123",
      placeDate: "2019-11-29",
      buyer: "泰瑞宝",
      orderAmt: 300,
      requireDate: "2020-02-20",
      confirmBy: "叶文杰",
      confirmDate: "2019-12-1",

    },
    {
      orderNum: "A00305",
      placeDate: "2019-12-05",
      buyer: "泰瑞宝",
      orderAmt: 400,
      requireDate: "2020-01-20",
      confirmBy: "叶文杰",
      confirmDate: "2019-12-1",
    }
  ];

  shipItems : ITransactionItem[] = [
    {
      orderNum: "A034124",
      placeDate: "2019-11-29",
      buyer: "泰瑞宝",
      orderAmt: 300,
      requireDate: "2020-02-20",
      confirmBy: "叶文杰",
      confirmDate: "2019-12-1",

      outDate: "2019-12-23",
      shipper: "",
      shipOrder: "",
    },
    {
      orderNum: "A03412423",
      placeDate: "2019-12-05",
      buyer: "泰瑞宝",
      orderAmt: 400,
      requireDate: "2020-01-20",
      confirmBy: "叶文杰",
      confirmDate: "2019-12-1",
    }
  ];

  billItems : ITransactionItem[] = [
    {
      orderNum: "A034124",
      placeDate: "2019-11-29",
      buyer: "泰瑞宝",
      orderAmt: 300,
      requireDate: "2020-02-20",
      confirmBy: "叶文杰",
      confirmDate: "2019-12-1",

      outDate: "2019-12-23",
      shipper: "",
      shipOrder: "",

      receiveDate: "2019-12-23",
    },
    {
      orderNum: "A03412423",
      placeDate: "2019-12-05",
      buyer: "泰瑞宝",
      orderAmt: 400,
      requireDate: "2020-01-20",
      confirmBy: "叶文杰",
      confirmDate: "2019-12-1",

      receiveDate: "2019-12-25",
    }
  ];

  invItems: IInvItem[] = [
    {
      invNum: "A08765780",
      invType: "专票",
      taxRate: 6,
      invAmt: 700,

      invDate: "2019-10-05",

      receiveDate: "2019-10-10",
      receiveBy: "泰瑞宝",
    },
    {
      invNum: "A034859060",
      invType: "专票",
      taxRate: 6,
      invAmt: 300,

      invDate: "2019-11-05",

      receiveDate: "2019-11-10",
      receiveBy: "泰瑞宝",
    }
  ];

}

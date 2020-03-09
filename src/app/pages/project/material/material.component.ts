import { Component, OnInit } from '@angular/core';

interface IStepInfo {
  title: string;
  description: string;
}

interface IMaterialInfo {
  code: string;
  name: string;
  quantity: number;
  applicationDate: string;
  applicationNum: string;
  applicationUser: string;
  orderNum: string;
  orderPlaceDate: string;
  actualRecvDate: string;

  message1?: string;
  message2?: string;
}


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.less']
})
export class MaterialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  steps: IStepInfo[] = [
    {
      title: '2019/11',
      description: '',
    },
    {
      title: '2019/12',
      description: '',
    },
    {
      title: '2020/01',
      description: '',
    },
    {
      title: '2020/02',
      description: '',
    },
    {
      title: '2020/03',
      description: '',
    },
  ];

  materials : IMaterialInfo[] = [
    {
      code: 'M02034050670',
      name: '品名 1',
      quantity: 300,
      applicationDate: '2019-09-10',
      applicationNum: 'A20100340',
      applicationUser: '泰瑞宝',
      orderNum: 'B02304056',
      orderPlaceDate: '2019-11-15',
      actualRecvDate: '2019-12-10',
    },
    {
      code: 'M02034050362',
      name: '品名 2',
      quantity: 1000,
      applicationDate: '2019-10-10',
      applicationNum: 'A20100570',
      applicationUser: '泰瑞宝',
      orderNum: 'B02304056',
      orderPlaceDate: '2019-10-15',
      actualRecvDate: '2019-12-01',
    },

    {
      code: 'M02034050670',
      name: '品名 4',
      quantity: 300,
      applicationDate: '2019-11-10',
      applicationNum: 'A20100980',
      applicationUser: '泰瑞宝',
      orderNum: 'B02304056',
      orderPlaceDate: '2019-11-15',
      actualRecvDate: '2019-12-10',
    },
    {
      code: 'M02034050670',
      name: '品名 5',
      quantity: 300,
      applicationDate: '2019-11-20',
      applicationNum: 'A20100340',
      applicationUser: '泰瑞宝',
      orderNum: 'B02304056',
      orderPlaceDate: '2019-12-05',
      actualRecvDate: '',
    },
    {
      code: 'M02034050670',
      name: '品名 6',
      quantity: 300,
      applicationDate: '2019-11-25',
      applicationNum: 'A20100340',
      applicationUser: '泰瑞宝',
      orderNum: '',
      orderPlaceDate: '',
      actualRecvDate: '',
      message1: '要求到货日期：2020-02-20 ',
      message2: '供货期：2 周'
    },
    {
      code: 'M02034050670',
      name: '品名 3',
      quantity: 300,
      applicationDate: '2019-11-30',
      applicationNum: 'A20100340',
      applicationUser: '泰瑞宝',
      orderNum: '',
      orderPlaceDate: '',
      actualRecvDate: '',
      message1: '要求到货日期：2020-02-10 ',
      message2: '供货期：3 周'
    }
  ];

}

import { Component, OnInit } from '@angular/core';

// 时间线
interface ITimelineTag {
  // 收入 or 支出
  bizType: string;

  // 文本
  title: string;

  status?: string;
}


@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.less']
})
export class FundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  contractInfos : ITimelineTag[] = [
    {
      bizType: 'in',
      title: '2019-03-15 C020020 +1000 总包合同 预付款',
    },
    {
      bizType: 'out',
      title: '2019-03-30 S020005 -100 劳务外包 预付款',
    },
    {
      bizType: 'out',
      title: '2019-05-30 S020005 -100 劳务外包 第一月',
    },
    {
      bizType: 'in',
      title: '2019-06-15 C020020 +500 总包合同 进度款 1  ',
    },
    {
      bizType: 'out',
      title: '2019-06-30 S020005 -100 劳务外包 尾款',
    },
    {
      bizType: 'in',
      title: '2019-06-30 C020020-A001 +100 补充合同  预付款',
    },
    {
      bizType: 'out',
      title: '2019-06-30 S020006 -300 设备采购  预付款',
    },
    {
      bizType: 'out',
      title: '2019-06-30 S020006 -500 设备采购  验收',
    },
    {
      bizType: 'in',
      title: '2019-09-15 C020020 +1000 总包合同  进度款 2',
    },
    {
      bizType: 'in',
      title: '2019-09-30 C020020-A001 +200 补充合同  尾款',
      status: 'pending'
    },
    {
      bizType: 'out',
      title: '2019-12-30 S020009 -500 物资采购(申请) 预付',
    },
    {
      bizType: 'in',
      title: '2019-12-30 C020020 +400 总包合同 进度款 3',
      status: 'pending'
    },
    {
      bizType: 'in',
      title: '2020-03-15 C020020 +100 总包合同  运维费',
      status: 'pending'
    },
  ];

  invoiceInfos: ITimelineTag[] = [
    {
      bizType: 'in',
      title: '2019-03-30 C020020 +1000 INV0001',
    },
    {
      bizType: 'out',
      title: '2019-03-30 S020005 -100 INV0002',
    },
    {
      bizType: 'out',
      title: '2019-05-30 S020005 -100 INV0003',
    },
    {
      bizType: 'in',
      title: '2019-06-30 C020020 +500 INV0004',
    },
    {
      bizType: 'out',
      title: '2019-06-30 S020005 -100 INV0005',
    },
    {
      bizType: 'in',
      title: '2019-07-30 C020020-A001 +100 INV0006',
    },
    {
      bizType: 'out',
      title: '2019-06-30 S020006 -300 设备采购 INV0007',
    },
    {
      bizType: 'out',
      title: '2019-06-30 S020006 -500 设备采购 INV0008',
    },
    {
      bizType: 'out',
      title: '2019-10-30 S020009 -500 物资采购 INV0009',
    },
    {
      bizType: 'in',
      title: '2019-11-30 C020020 +1000 总包合同 INV0010',
      status: 'pending'
    }
  ];

  fundInfos: ITimelineTag[] = [
    {
      bizType: 'out',
      title: '2019-04-30 S020005 -100 INV0002',
    },
    {
      bizType: 'in',
      title: '2019-06-30 C020020 +300 INV0001',
    },
    {
      bizType: 'out',
      title: '2019-06-30 S020005 -100 INV0003',
    },
    {
      bizType: 'out',
      title: '2019-07-30 S020005 -400 INV0005',
    },
    {
      bizType: 'out',
      title: '2019-08-30 S020006 -800 设备采购 INV0007',
    },
    {
      bizType: 'in',
      title: '2019-09-30 C020020 +500 INV0004',
    },
    {
      bizType: 'in',
      title: '2019-09-30 C020020-A001 +100 INV0006',
    }
  ];
}

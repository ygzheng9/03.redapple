import { Component, OnInit } from '@angular/core';

// 合同列表中的数据项
interface IContractInfo {
  num: string;
  name: string;
  bizType: string;
  signDate: string;
  firstParty: string;
  secondParty: string;
  amount: number;
  remark: string;
}

interface IMilestone {
  num: string;
  name: string;
  planDate: string;
  amount: number;
  remark: string;
  billed: string;
  cleared: string;
}

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.less']
})
export class ContractComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customerContracts: IContractInfo[] = [
    {
      num: 'C020020',
      name: '某某项目总包合同',
      bizType: '主合同',
      signDate: '2019-03-10',
      firstParty: '塘沽区政府',
      secondParty: '天津公司',
      amount: 3000,
      remark: '试点项目，后续还有很多机会'
    },
    {
      num: 'C020020-01',
      name: '关于增加某某的备忘',
      bizType: '补充合同',
      signDate: '2019-06-20',
      firstParty: '塘沽区政府',
      secondParty: '天津公司',
      amount: 400,
      remark: '增加工程范围，追加合同'
    },
    {
      num: 'C020020-02',
      name: '工程进度调整',
      bizType: '补充合同',
      signDate: '2019-09-10',
      firstParty: '塘沽区政府',
      secondParty: '天津公司',
      amount: 0,
      remark: '由于现成不具备施工条件，完工时间从 2019-9-30 调整至 2019-11-15'
    }
  ];

  subContracts: IContractInfo[] = [
    {
      num: 'S020005',
      name: '第二季度施工合同',
      bizType: '劳务外包',
      signDate: '2019-03-15',
      firstParty: '天津公司',
      secondParty: '某某工程公司',
      amount: 350,
      remark: '土地平整、现场施工'
    },
    {
      num: 'S020006',
      name: '电机设备采购合同',
      bizType: '设备采购',
      signDate: '2019-03-20',
      firstParty: '天津公司',
      secondParty: '某某设备公司',
      amount: 300,
      remark: '第一批电机设备采购'
    },
    {
      num: 'S020007',
      name: '第三季度施工合同',
      bizType: '劳务外包',
      signDate: '2019-08-15',
      firstParty: '天津公司',
      secondParty: '某某工程公司',
      amount: 250,
      remark: '第二阶段施工下包'
    },
    {
      num: 'S020009',
      name: '第三季度施工合同',
      bizType: '物资采购',
      signDate: '2019-08-30',
      firstParty: '天津公司',
      secondParty: '某某塑料公司',
      amount: 400,
      remark: '管线采购'
    }
  ];

  clientMilestones : IMilestone[] = [
    {
      num: '01',
      name: '预付款',
      planDate: '2019-03-15',
      amount: 1000,
      remark: '',
      billed: "done",
      cleared: "done",
    },
    {
      num: '02',
      name: '第一阶段验收',
      planDate: '2019-06-30',
      amount: 500,
      remark: '',
      billed: "done",
      cleared: "delayed",
    },
    {
      num: '03',
      name: '第二阶段验收',
      planDate: '2019-09-30',
      amount: 1000,
      remark: '',
      billed: "done",
      cleared: "delayed",
    },
    {
      num: '04',
      name: '第三阶段验收',
      planDate: '2019-12-30',
      amount: 1000,
      remark: '',
      billed: "delayed",
      cleared: "",
    },
    {
      num: '05',
      name: '运维',
      planDate: '2020-03-30',
      amount: 500,
      remark: '',
      billed: "",
      cleared: "",
    }
  ];

  subMilestones : IMilestone[] = [
    {
      num: '01',
      name: '预付款',
      planDate: '2019-03-15',
      amount: 100,
      remark: '',
      billed: "done",
      cleared: "done",
    },
    {
      num: '02',
      name: '第一月费用',
      planDate: '2019-05-10',
      amount: 100,
      remark: '',
      billed: "done",
      cleared: "done",
    },
    {
      num: '03',
      name: '第二月费用',
      planDate: '2019-06-10',
      amount: 100,
      remark: '',
      billed: "done",
      cleared: "delayed",
    },
    {
      num: '04',
      name: '第三月费用',
      planDate: '2019-07-10',
      amount: 50,
      remark: '',
      billed: "delayed",
      cleared: "",
    }
    ];

  milestones: IMilestone[] = [];

  currContract: IContractInfo = {} as IContractInfo;

  isVisible = false;

  showModal(type: string, contract: IContractInfo): void {
    this.currContract = contract;

    if (type === 'client') {
      this.milestones = this.clientMilestones;
    } else {
      this.milestones = this.subMilestones;
    }

    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}

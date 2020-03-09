import { Component, OnInit } from '@angular/core';

interface TreeNodeInterface {
  key: number;
  name: string;
  mandays?: number;
  planDate: string;
  updateUser: string;
  updateDate: string;
  status: string;
  attachment: string;
  remark?: string;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
  level?: number;
  expand?: boolean;
}

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.less']
})
export class PlanComponent implements OnInit {

  constructor() { }

  listOfMapData: TreeNodeInterface[] = [
    {
      key: 1,
      name: '1.准备阶段',
      mandays: 60,
      remark: '',
      planDate: '2019-03-30',
      updateUser: '万德福',
      updateDate: '2019-03-30',
      status: 'complete',
      attachment: '5',
  children: [
        {
          key: 11,
          name: '项目组成立',
          mandays: 5,
          planDate: '2019-03-30',
          updateUser: '万德福',
          updateDate: '2019-03-30',
          status: 'complete',
          attachment: '5',
          remark: ''
        },
        {
          key: 12,
          name: '外包人员进场',
          mandays: 10,
          planDate: '2019-03-30',
          updateUser: '万德福',
          updateDate: '2019-03-30',
          status: 'complete',
          attachment: '5',
          remark: '',
          children: [
            {
              key: 121,
              name: '健康检查',
              mandays: 16,
              planDate: '2019-03-30',
              updateUser: '万德福',
              updateDate: '2019-03-30',
              status: 'complete',
              attachment: '5',
              remark: '所有人员健康证'
            }
          ]
        },
        {
          key: 13,
          name: '现场勘查',
          mandays: 72,
          planDate: '2019-03-30',
          updateUser: '万德福',
          updateDate: '2019-03-30',
          status: 'complete',
          attachment: '5',
          remark: '',
          children: [
            {
              key: 131,
              name: '水源勘查',
              mandays: 42,
              planDate: '2019-03-30',
              updateUser: '万德福',
              updateDate: '2019-03-30',
              status: 'complete',
              attachment: '5',
              remark: 'London No. 2 Lake Park',
            }
          ]
        }
      ]
    },
    {
      key: 2,
      name: '2.土建',
      mandays: 32,
      planDate: '2019-10-30',
      updateUser: '万德福',
      updateDate: '2019-10-30',
      status: 'complete',
      attachment: '5',
      remark: '',
      children: [
        {
          key: 21,
          name: '拆迁安置',
          mandays: 15,
          planDate: '2019-08-30',
          updateUser: '万德福',
          updateDate: '2019-08-30',
          status: 'complete',
          attachment: '5',
          remark: ''
        },
        {
          key: 22,
          name: '土地平整',
          mandays: 5,
          planDate: '2019-10-30',
          updateUser: '万德福',
          updateDate: '2019-10-30',
          status: 'complete',
          attachment: '5',
          remark: ''
        },
      ]
    },
    {
      key: 3,
      name: '3.浇筑',
      mandays: 32,
      planDate: '2019-11-15',
      updateUser: '万德福',
      updateDate: '2019-11-10',
      status: 'delay',
      attachment: '2',
      remark: ''
    },
    {
      key: 4,
      name: '4.蓄水',
      mandays: 32,
      planDate: '2020-12-30',
      updateUser: '',
      updateDate: '',
      status: '',
      attachment: '',
      remark: ''
    },
    {
      key: 5,
      name: '5.运维',
      mandays: 32,
      planDate: '2020-03-30',
      updateUser: '',
      updateDate: '',
      status: '',
      attachment: '',
      remark: ''
    }


  ];
  mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if ($event === false) {
      if (data.children) {
        data.children.forEach(d => {
          const target = array.find(a => a.key === d.key)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
    const stack: TreeNodeInterface[] = [];
    const array: TreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({ ...node.children[i], level: node.level! + 1, expand: false, parent: node });
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [key: string]: boolean }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

  ngOnInit(): void {
    this.listOfMapData.forEach(item => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
  }

  statusName(code: string) {
    let m = {'complete': '完成',
    'delay': '延期'
    };

    return m[code];
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

export interface ITaskItem {
  key: string;
  description: string;
  from: string;
  refBiz: string;
  owner: string;
  planDate: string;
  assignDate: string;
  updateDate?: string;
  updateStatus?: string;
}

export interface IGroupItem {
  title: string;
  status: string;
  items: ITaskItem[];
}


@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.less']
})
export class OpenComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.entryForm = this.fb.group({
      keyword: [null, [Validators.required]],
      description: [undefined, [Validators.required]],
      from: [null, [Validators.required]],
      owner: [null, [Validators.required]],
      planDate: [null, [Validators.required]],
      taskType: [null, [Validators.required]],
    });
  }

  statusName(code: string) {
    let m = {
      'open': '进行中',
      'complete': '完成',
      'delay': '延期'
    };

    return m[code];
  }

  tasks : ITaskItem[] = [
    {
      key: '1',
      description: 'M020356 物资请购过早，项目资金占用大',
      from: '万德福',
      refBiz: '请购单号 A030405',
      owner: '泰瑞宝',
      planDate: '2019-12-5',
      assignDate: '2019-12-4',
      updateStatus: 'delay',
    },
    {
      key: '2',
      description: '电机设备故障率高，查明原因',
      from: '万德福',
      refBiz: '项目号 P030501',
      owner: '泰瑞宝',
      planDate: '2019-12-30',
      assignDate: '2019-12-4',
      updateStatus: 'open',
    },
  ];

  groupTasks : IGroupItem[] = [
    {
      title: '已延期',
      status: 'overdue',
      items: this.tasks,
    },
    {
      title: '三天内到期',
      status: 'due',
      items: this.tasks,
    },
    {
      title: '待处理',
      status: 'open',
      items: this.tasks,
    },
  ];

  // 对话框
  isVisible = false;

  showModal(): void {
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

  entryForm: FormGroup;
  users: any[] = [
    { value: 'xiao', label: '泰瑞宝' },
    { value: 'mao', label: '万德福' },
    { value: 'ke', label: '克来沃' }
  ];

  _submitForm() {
    Object.keys(this.entryForm.controls).forEach(key => {
      this.entryForm.controls[key].markAsDirty();
      this.entryForm.controls[key].updateValueAndValidity();
    });
    if (this.entryForm.invalid) return;
  }
}

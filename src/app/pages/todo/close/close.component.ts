import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ITaskItem} from "../open/open.component";

import * as dayjs from 'dayjs'

@Component({
  selector: 'app-close',
  templateUrl: './close.component.html',
  styleUrls: ['./close.component.less']
})
export class CloseComponent implements OnInit {
  searchForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let today = dayjs();
    let start = today.add(-3, 'month');

    this.searchForm = this.fb.group({
      taskRange: [[start.toDate(), today.toDate()], []],
      searchText: [null, []]
    });
  }

  submitForm(): void {
    console.warn(this.searchForm.value);

    for (const i in this.searchForm.controls) {
      this.searchForm.controls[i].markAsDirty();
      this.searchForm.controls[i].updateValueAndValidity();
    }
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

}

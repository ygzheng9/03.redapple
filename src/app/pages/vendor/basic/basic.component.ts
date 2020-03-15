import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less']
})
export class BasicComponent implements OnInit {

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

  }

  data = [
    ' 2017 - ISO9000',
    ' 2018 - ISO14000',
    ' 2019 - ISO16949',
  ];
}

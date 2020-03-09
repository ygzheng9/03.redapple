import { Component, OnInit } from '@angular/core';

import {OrderService} from "../order.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  brews: Object;

  constructor(private orderSvc: OrderService) { }

  ngOnInit(): void {
    this.orderSvc.getBeer().subscribe(data => {
      this.brews = data;
    });
  }

}

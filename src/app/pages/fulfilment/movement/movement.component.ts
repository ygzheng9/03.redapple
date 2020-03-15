import { Component, OnInit } from '@angular/core';

import {FulfilmentService, IMovementItem} from "../fulfilment.service";

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.less']
})
export class MovementComponent implements OnInit {
  movementList: IMovementItem[] = [];
  fileList: [];
  materialCode: string = '';

  constructor(private svc :FulfilmentService) { }

  ngOnInit(): void {
    this.getAllMovements();
  }

  getAllMovements() {
    this.svc.getAllMovements(this.materialCode).subscribe((res) => {
      this.movementList = res.items;
    })
  }
}

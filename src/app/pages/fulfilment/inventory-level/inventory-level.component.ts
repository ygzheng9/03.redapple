import { Component, OnInit } from '@angular/core';
import {FulfilmentService, IAllocInfo, IInventoryLevelItem} from "../fulfilment.service";

@Component({
  selector: 'app-inventory-level',
  templateUrl: './inventory-level.component.html',
  styleUrls: ['./inventory-level.component.less']
})
export class InventoryLevelComponent implements OnInit {
  inventoryList: IInventoryLevelItem[] =  [];
  materialCode: string = '';

  allocationList: IAllocInfo[] =  [];

  constructor(private svc : FulfilmentService) { }

  ngOnInit(): void {
    this.getInventory();
  }

  getInventory() {
    this.svc.getInventory(this.materialCode).subscribe(res => {
      this.inventoryList = res.items;
    });
  }

  showAlloc(materialCode: string) {
    this.svc.getAllocByMat(materialCode).subscribe(res => {
      this.isVisible = true;
      this.allocationList = res.items;
    });
  }

  // 对话框
  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}

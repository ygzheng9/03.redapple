import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gutter = 16;
  count = 8;

  generateArray(value: number): number[] {
    return new Array(value);
  }

}

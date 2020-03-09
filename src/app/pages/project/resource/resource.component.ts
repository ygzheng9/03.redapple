import { Component, OnInit } from '@angular/core';

interface ICalendarManDay {
    day: number;
    manday: number;
}

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.less']
})
export class ResourceComponent implements OnInit {

  constructor() { }

  mockData : ICalendarManDay[] = [];

  selectedValue = new Date('2019-12-25');

  chartOption = {
    title: {
      text: '人力投入曲线',
      x: "center",
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      data: ['计划', '实际'],
      x: 'right'
    },
    toolbox: {
      show: false
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis : [
      {
        type : 'category',
        boundaryGap : false,
        data : ['2019-07', '2019-08', '2019-09', '2019-10','2019-11', '2019-12','2020-01', '2020-02', '2020-03']
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name: '计划',
        type: 'line',
        data: [1700, 2000, 3000, 3200, 3200, 3000, 2800, 2300, 1500]
      },
      {
        name: '实际',
        type: 'line',
        data: [1600, 1900, 2800, 3300, 3300, 3600]
      }
    ]
  };

  ngOnInit(): void {
    for(let i = 0; i <=31; i ++) {
      let days =  100 + Math.floor(10 * Math.random())
      this.mockData.push({day: i, manday: days})
    }
  }

  getDays(d: number) {
    let a = this.mockData.find(i => i.day == d);
    if (a === undefined) {
      return 100;
    }
    return a.manday;
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import * as Chart from 'chart.js';

import * as _ from 'lodash';

import {IMyOptions} from 'mydatepicker';

import { StatsDataService } from './stats.service';
import { Segment } from './segment';
import { TxDetail } from './txDetail';
import { DailySales } from './dailySales';

@Component({
  // selector:    '',
  templateUrl: './demo.component.html',
  styleUrls:   ['./demo.component.scss']
})
export class DemoComponent implements OnInit, AfterViewInit {
  @ViewChild('lineChart') lineRef: ElementRef;

  details: TxDetail[];

  allSegs: Segment[];

  customers: string[];

  filteredCustomer: string[];
  customerFilter: string;

  selectedSegment: number;
  selectedCustomer: string;

  // 默认显示日曲线；
  showDailySales: boolean;

  // 日提单数曲线
  dailySales: DailySales[];
  lineChart: any;

  // 饼图数据
  prettySegs: Segment[];
  myChart: any;

  // 默认甜甜圈
  whichChart = 'doughnut';

  // https://github.com/kekeh/mydatepicker
  private myDatePickerOptions: IMyOptions = {
    // other options...
    dateFormat: 'yyyy.mm.dd',
  };

  // Initialized to specific date (09.10.2018).
  // startDate: Object = { date: { year: 2018, month: 10, day: 9 } };
  //
  // searchRange: Object = {beginDate: {year: 2018, month: 10, day: 9},
  //   endDate: {year: 2018, month: 10, day: 19}};

  startDate = null;
  searchRange = [];

  constructor(private statsDataService: StatsDataService) {}

  ngOnInit(): void {
    this.selectedSegment  = 0;
    this.selectedCustomer = '';
    this.showDailySales = true;

    this.statsDataService.showSegments().subscribe(data => this.allSegs = data.items);
  }

  ngAfterViewInit(): void {
    this.statsDataService.prettySegments().subscribe(data => {
      this.prettySegs = data.items;
    });

    this.statsDataService.getDailySales().subscribe(({status, items})  => {
      this.dailySales = items;
      this.drawLine(items);
    });
  }

  getAllDetails(): void {
    this.statsDataService.getAllDetails().subscribe(({items}) => this.details = items );
  }
  //
  // listAllSegments(): void {
  //   this.statsDataService.showSegments().subscribe(data => this.allSegs = data);
  //   this.selectedSegment = 0;
  // }

  drillBySegment(segment: number): void {
    this.selectedSegment = segment;

    this.statsDataService.drillBySegment(this.selectedSegment)
        .subscribe(data => {
          this.customers        = data.items;
          this.filteredCustomer = data.items;
        });

    this.selectedCustomer = '';
    this.customerFilter   = '';
  }

  filterCustomer(filter: string): void {
    this.filteredCustomer = _.filter(this.customers, function (i) {
      return i.toLowerCase().includes(filter.toLowerCase());
    });
  }

  isSegmentSelected(segment: number): boolean {
    return this.selectedSegment === segment;
  }

  drillByCust(cust: string): void {
    this.selectedCustomer = cust;

    this.statsDataService.drillByCust(this.selectedCustomer).subscribe(data => this.details = data.items);
  }

  isCustomerSelected(cust: string): boolean {
    return this.selectedCustomer === cust;
  }

  // 是否有选中的 segment
  hasSelectedSegment(): boolean {
    return (this.selectedSegment !== 0);
  }

  // 是否有选中的客户
  hasSelectedCustomer(): boolean {
    return (this.selectedCustomer !== '');
  }

  switchChart(target: string): void {
    this.whichChart = target;

    this.drawChart(this.prettySegs);
  }

  isCurrentChart(current: string): boolean {
    return current === this.whichChart;
  }

  fetchPrettySegs(segs: Segment[]) {
    this.prettySegs = segs;
    this.drawChart(this.prettySegs);
  }

  drawChart(chartSegs: Segment[]) {

    const ctx = document.getElementById('myChart');

    if (this.myChart) {
      this.myChart.destroy();
    }

    const setting = this.prepareData(chartSegs);

    const backgroundColor = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ];

    const borderColor = [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
    ];

    let options = {};

    if (this.whichChart === 'bar') {
      options = {
        responsive: true,
        scales:     {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };
    } else {
      options = {responsive: true};
    }

    this.myChart = new Chart(ctx, {
      type:    this.whichChart,
      data:    {
        labels:   setting.labels,
        datasets: [{
          label:           '# of Total BLs',
          data:            setting.data,
          backgroundColor: backgroundColor,
          borderColor:     borderColor,
          borderWidth:     1
        }]
      },
      options: options
    });
  }

  prepareData(segs: Segment[]): any {
    console.log(segs);
    const labels = _.map(segs, 'seg');
    const data   = _.map(segs, 'count');

    const tmp = _.map(labels, function (i) {
      if (i <= 3) {
        return i;
      } else {
        return i + '+';
      }
    });

    console.log(labels);
    console.log(data);

    return {
      labels: tmp,
      data:   data
    };
  }

  drawLine(sales: DailySales[]): void {
    const ctx = this.lineRef.nativeElement;

    if (this.lineChart) {
      this.lineChart.destroy();
    }

    // const labels = _.map(sales, i => moment(i.bizDate).subtract(1, 'months').format('YYYYMMDD'));
    const labels = _.map(sales, i => i.bizDate);

    const vol1s  = _.map(sales, i => i.vol1);
    const vol2s  = _.map(sales, i => i.vol2);

    const data = {
      labels:   labels,
      datasets: [
        {
          label:                     '提单数',
          fill:                      false,
          lineTension:               0.1,
          backgroundColor:           'rgba(75,192,192,0.4)',
          borderColor:               'rgba(75,192,192,1)',
          borderCapStyle:            'butt',
          borderDash:                [],
          borderDashOffset:          0.0,
          borderJoinStyle:           'miter',
          pointBorderColor:          'rgba(75,192,192,1)',
          pointBackgroundColor:      '#fff',
          pointBorderWidth:          1,
          pointHoverRadius:          5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor:     'rgba(220,220,220,1)',
          pointHoverBorderWidth:     2,
          pointRadius:               1,
          pointHitRadius:            10,
          data:                      vol1s,
          spanGaps:                  false,
        },
        {
          label:                     '客户数',
          fill:                      false,
          lineTension:               0.1,
          backgroundColor:           'rgba(275,192,192,0.4)',
          borderColor:               'rgba(275,192,192,1)',
          borderCapStyle:            'butt',
          borderDash:                [],
          borderDashOffset:          0.0,
          borderJoinStyle:           'miter',
          pointBorderColor:          'rgba(75,192,192,1)',
          pointBackgroundColor:      '#fff',
          pointBorderWidth:          1,
          pointHoverRadius:          5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor:     'rgba(220,220,220,1)',
          pointHoverBorderWidth:     2,
          pointRadius:               1,
          pointHitRadius:            10,
          data:                      vol2s,
          spanGaps:                  false,
        }
      ]
    };

    this.lineChart = new Chart(ctx, {
      type: 'line',
      data: data,
    });
  }

  switchMode(): void {
    this.showDailySales = !this.showDailySales;

    if (this.showDailySales) {
      this.drawLine(this.dailySales);
    } else {
      this.drawChart(this.prettySegs);
    }
  }

}

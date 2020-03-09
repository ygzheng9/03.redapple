import { Component, OnInit } from '@angular/core';


// 项目列表中的数据项
interface IDateItem {
  num: string;
  name: string;
  firstParty: string;
  secondParty: string;
  amount: number;
  address: string;
  [key: string]: string | number
}


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.less']
})
export class OverviewComponent implements OnInit {

  chartOption = {};

  constructor() { }

  ngOnInit(): void {
    this.initChartOption();
  }

  searchValue = '';
  sortName: string | null = null;
  sortValue: string | null = null;
  listOfFilterAddress = [
    { text: '天津', value: '天津' },
    { text: '酒泉', value: '酒泉' },
  ];
  listOfSearchAddress: string[] = [];
  listOfData: Array<IDateItem> = [
    {
      num: 'P1902050',
      name: '项目 1',
      firstParty: '天津市滨海新区',
      secondParty: '天津公司',
      amount: 3700,
      address: '天津市滨海新区',
    },
    {
      num: 'P1903031',
      name: '项目 2',
      firstParty: '甘肃省酒泉市',
      secondParty: '酒泉公司',
      amount: 800,
      address: '酒泉市滨海新区',
    },
    {
      num: 'P1902028',
      name: '项目 3',
      firstParty: '四川省成都市政府',
      secondParty: '四川公司',
      amount: 300,
      address: '成都市市滨海新区',
    },
    {
      num: 'P1905024',
      name: '项目 4',
      firstParty: '海南省文昌市',
      secondParty: '海南公司',
      amount: 1300,
      address: '文昌市滨海新区',
    }
  ];
  listOfDisplayData = [...this.listOfData];

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    this.search();
  }

  filterAddressChange(value: string[]): void {
    this.listOfSearchAddress = value;
    this.search();
  }

  search(): void {
    const filterFunc = (item: IDateItem) => {
      return (
        (this.listOfSearchAddress.length
          ? this.listOfSearchAddress.some(address => item.address.indexOf(address) !== -1)
          : true) && ( item.name.indexOf(this.searchValue) !== -1  || item.num.indexOf(this.searchValue) !== -1  )
      );
    };
    const data = this.listOfData.filter((item) => filterFunc(item));
    this.listOfDisplayData = data.sort((a, b) =>
      this.sortValue === 'ascend'
        ? a[this.sortName!] > b[this.sortName!]
        ? 1
        : -1
        : b[this.sortName!] > a[this.sortName!]
        ? 1
        : -1
    );
  }

  // echart map
  randomValue() {
    return Math.round(Math.random()*1500);
  }

  initChartOption() {
    let dataList = [
      {name:"南海诸岛",value:0},
      {name: '北京', value: this.randomValue()},
      {name: '天津', value: this.randomValue()},
      {name: '上海', value: this.randomValue()},
      {name: '重庆', value: this.randomValue()},
      {name: '河北', value: this.randomValue()},
      {name: '河南', value: this.randomValue()},
      {name: '云南', value: this.randomValue()},
      {name: '辽宁', value: this.randomValue()},
      {name: '黑龙江', value: this.randomValue()},
      {name: '湖南', value: this.randomValue()},
      {name: '安徽', value: this.randomValue()},
      {name: '山东', value: this.randomValue()},
      {name: '新疆', value: this.randomValue()},
      {name: '江苏', value: this.randomValue()},
      {name: '浙江', value: this.randomValue()},
      {name: '江西', value: this.randomValue()},
      {name: '湖北', value: this.randomValue()},
      {name: '广西', value: this.randomValue()},
      {name: '甘肃', value: this.randomValue()},
      {name: '山西', value: this.randomValue()},
      {name: '内蒙古', value: this.randomValue()},
      {name: '陕西', value: this.randomValue()},
      {name: '吉林', value: this.randomValue()},
      {name: '福建', value: this.randomValue()},
      {name: '贵州', value: this.randomValue()},
      {name: '广东', value: this.randomValue()},
      {name: '青海', value: this.randomValue()},
      {name: '西藏', value: this.randomValue()},
      {name: '四川', value: this.randomValue()},
      {name: '宁夏', value: this.randomValue()},
      {name: '海南', value: this.randomValue()},
      {name: '台湾', value: this.randomValue()},
      {name: '香港', value: this.randomValue()},
      {name: '澳门', value: this.randomValue()}
    ];

    this.chartOption = {
      title : {
        text: '全国项目分布',
        subtext: '',
        x:'center'
      },
      tooltip : {//提示框组件。
        trigger: 'item'//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
      },
      legend: {
        show: false,
        orient: 'horizontal',//图例的排列方向
        x:'left',//图例的位置
        data:['项目金额']
      },
      visualMap: {
        //颜色的设置  dataRange
        x: 'left',
        y: 'center',
        splitList: [
          {start: 5, end: 5},
          {start: 10, end: 200},
          {start: 200, end: 300},
          {start: 310, end: 1000},
          {start: 900, end: 1500}
        ],
        text:['高','低'],// 文本，默认为数值文本
      },
      toolbox: {//工具栏
        show: true,
        orient : 'vertical',//工具栏 icon 的布局朝向
        x: 'right',
        y: 'center',
        feature : {//各工具配置项。
          mark : {show: false},
          dataView : {show: false, readOnly: false},//数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
          restore : {show: false},//配置项还原。
          saveAsImage : {show: false}//保存为图片。
        }
      },
      roamController: {//控制地图的上下左右放大缩小 图上没有显示
        show: true,
        x: 'right',
        mapTypeControl: {
          'china': true
        }
      },
      series : [
        {
          name: '项目金额',
          type: 'map',
          mapType: 'china',
          roam: false,//是否开启鼠标缩放和平移漫游
          itemStyle:{//地图区域的多边形 图形样式
            normal:{//是图形在默认状态下的样式
              label:{
                show:true,//是否显示标签
                textStyle: {
                  color: "rgb(249, 249, 249)"
                }
              }
            },
            emphasis:{//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
              label:{show:true}
            }
          },
          top:"3%",//组件距离容器的距离
          data: dataList
        }
      ]
    };
  }

}

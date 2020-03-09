import { Component, OnInit } from '@angular/core';
import {IMsg, WelcomeService} from "./welcome.service";



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {
  title: string;
  heroes: string[];
  myHero: string;

  message: IMsg = {
    msg: "",
    status: "-100",
  };


  constructor(private welcomeSvc : WelcomeService) {
    this.title = 'Tour of Heroes';
    this.myHero = 'Windstorm';
    this.heroes =  ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

    // this.welcomeSvc.getMessage().subscribe((data: IMsg) => {
    //   console.log(data);
    //
    //   this.message = data;
    // });
  }

  ngOnInit() {

  }


}

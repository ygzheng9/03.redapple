import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  messageUrl = '/api/login';

  constructor(private http: HttpClient) { }

  getMessage() {
    return this.http.get<IMsg>(this.messageUrl);
  }
}


export interface IMsg {
  msg: string;
  status: string;
};

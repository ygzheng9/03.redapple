import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}

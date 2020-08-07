import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PostInventory } from '../classes/post_inventory';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  result: any;
  home_route = 'http://10.10.4.61:8081/inventory';
  constructor(private http: HttpClient) { }

  getData(route,param_name,data): Observable<any>{
    let param1 = new HttpParams().set(param_name,data);
    // this.api_call = this.home_route + route;
    return this.http.get(this.home_route + route,{params: param1})
  }

  postData(route,opost:PostInventory): Observable<any>{
    // this.api_call = this.home_route + route;
    return this.http.post(this.home_route + route,opost);
  }

  getAllData(): Observable<any>{
    // this.api_call = this.home_route + route;
    return this.http.get(this.home_route)
  }

}
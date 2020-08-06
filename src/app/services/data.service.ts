import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  api_call: string;
  constructor(private http: HttpClient) { }

  getData(route,param_name,data): Observable<any>{
    let param1 = new HttpParams().set(param_name,data)
    this.api_call = 'http://localhost:8081/inventory' + route;
    return this.http.get(this.api_call,{params: param1});
  }
  postData(route,data): Observable<any>{
    this.api_call = 'http://localhost:8081/inventory' + route;
    
    return this.http.post(this.api_call,data);
  }
}

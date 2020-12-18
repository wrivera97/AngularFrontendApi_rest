import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  headers: HttpHeaders;

  constructor(private _http: HttpClient) { }

  get(url: string) {
   return  this._http.get(environment.API_URL + url);
  }
  post(url: string, data: any) {
    url = environment.API_URL + url;
    this.headers = new HttpHeaders();
    return this._http.post(url , data, {headers: this.headers});
  }
}

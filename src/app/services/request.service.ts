import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const MAIN_URL = 'http://104.248.130.17:8080/';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }

  get(url, options: any = {isCross: true}) {
    const headers = new HttpHeaders();
    if (options.isCross) {
      headers.append('Access-Control-Allow-Origin', '*');
    }
    return this.http.get(url, {
      headers: headers,
      responseType: 'json'
    });
  }

}

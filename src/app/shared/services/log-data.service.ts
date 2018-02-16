import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { Http, RequestOptions } from "@angular/http";

import { Observable } from "rxjs/Observable";
// import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { GridData } from '../models/Grid';

@Injectable()
export class LogDataService {

  constructor(private http: Http) { }

  getLogs(logType: number, pageNumber: number): Observable<GridData> {
    let options = new RequestOptions({
      params: {
        Type: logType,
        PageNumber: pageNumber
      }
    });
    return this.http.get(environment.apiUrl, options).map(res => res.json());
  }

  deleteLog(logId: number): Observable<any> {
    let options = new RequestOptions({
      body: {
        Id: logId
      }
    });
    return this.http.delete(environment.apiUrl, options);
  }

  createLog(log: Log): Observable<any> {
    let body = {
      TypeId: log.type,
      Title: log.title,
      Description: log.description,
      Date: log.date
    };
    return this.http.post(environment.apiUrl, body);
  }

  updateLog(log: Log): Observable<any> {
    let body = {
      Id: log.id,
      TypeId: log.type,
      Title: log.title,
      Description: log.description,
      Date: log.date
    };
    return this.http.put(environment.apiUrl, body);
  }
}

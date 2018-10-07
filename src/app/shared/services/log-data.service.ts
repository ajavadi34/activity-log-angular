import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from '../../../environments/environment';

@Injectable()
export class LogDataService {

  constructor(private http: HttpClient) { }

  getLogs(logType: number, pageNumber: number): Observable<any> {
    let options = {
      params: new HttpParams()
        .set('Type', logType.toString())
        .set('PageNumber', pageNumber.toString())
    };

    return this.http.get(environment.logDataApiUrl, options);
  }

  deleteLog(logId: number): Observable<any> {
    let options = {
      body: { Id: logId }
    };

    // work around since new http client does not allow body for delete method
    return this.http.request('delete', environment.logDataApiUrl, options);
  }

  createLog(log: Log): Observable<any> {
    let body = {
      TypeId: log.type,
      Title: log.title,
      Description: log.description,
      Link: log.link,
      Date: log.date
    };

    return this.http.post(environment.logDataApiUrl, body);
  }

  updateLog(log: Log): Observable<any> {
    let body = {
      Id: log.id,
      TypeId: log.type,
      Title: log.title,
      Description: log.description,
      Link: log.link,
      Date: log.date
    };

    return this.http.put(environment.logDataApiUrl, body);
  }
}

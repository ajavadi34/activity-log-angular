import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LogType } from '../models/LogType';

@Injectable()
export class LogTypeService {

  constructor(private http: Http) { }

  createLogType(typeName: string): Observable<LogType[]> {
    let body = {
      Name: typeName
    };

    return this.http.post(environment.logTypeApiUrl, body).map(res => res.json());
  }

  updateLogType(logType: LogType): Observable<any> {
    let body = {
      TypeId: logType.typeId,
      Name: logType.name
    };

    return this.http.put(environment.logTypeApiUrl, body);
  }
}

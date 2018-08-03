import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from "rxjs";
import { LogType } from '../models/LogType';

@Injectable()
export class LogTypeService {

  constructor(private http: HttpClient) { }

  createLogType(typeName: string): Observable<any> {
    let body = {
      Name: typeName
    };

    return this.http.post(environment.logTypeApiUrl, body);
  }

  updateLogType(logType: LogType): Observable<any> {
    let body = {
      TypeId: logType.typeId,
      Name: logType.name
    };

    return this.http.put(environment.logTypeApiUrl, body);
  }
}

import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable()
export class LogDataService {

  constructor() { }

  getLogs(): Log[] {
    return [
      {
        id: 1,
        type: 'One',
        title: 'hello',
        description: 'sample desc',
        date: '1/3/14'
      },
      {
        id: 2,
        type: 'Two',
        title: 'hello',
        description: 'sample desc',
        date: '1/3/14'
      },
      {
        id: 3,
        type: 'Three',
        title: 'hello',
        description: 'sample desc',
        date: '1/3/14'
      }
    ];
  }
}

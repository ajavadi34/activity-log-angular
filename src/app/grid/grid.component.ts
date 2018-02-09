import { Component, OnInit } from '@angular/core';
import { GridData } from '../shared/models/Grid';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { LogModalComponent } from '../shared/modals/log-modal/log-modal.component';
import { LogDataService } from '../shared/services/log-data.service';
import { ConfirmationModalComponent } from '../shared/modals/confirmation-modal/confirmation-modal.component';
import { Log } from '../shared/models/Log';
import { LogType } from '../shared/models/LogType';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  grid: GridData;

  constructor(
    private modalService: NgbModal,
    private logService: LogDataService
  ) {
    this.grid = new GridData();
  }

  ngOnInit() {
    this.logService.getLogs().subscribe(
      (data: GridData) => {
        this.grid.types = LogType.mapJsonResponse(data.types);
        this.grid.headers = data.headers;
        this.grid.rows = Log.mapJsonResponse(data.rows);
      }, err => {
        console.log(err)
      });
  }

  deleteLog(logId: number, event: any): void {
    event.stopPropagation();
    console.log('Deleting log id: ' + logId);

    let log: Log = this.grid.rows.find(l => l.id === logId);

    // confirm user action
    let modalRef = this.modalService.open(ConfirmationModalComponent, { size: 'lg' });

    (modalRef.componentInstance as ConfirmationModalComponent).header = "Are you sure you want to delete this log?";
    (modalRef.componentInstance as ConfirmationModalComponent).body = `Id: ${log.id}
    Title: ${log.title}
    Description: ${log.description}`;

    modalRef.result.then(result => {
      if (result === 'confirmed') {
        console.log(result);
        this.logService.deleteLog(logId).subscribe(res => {
          //todo get typeid from dropdown
          this.reloadLogs(0);
        });
      }
    }).catch(reason => {
      console.log(reason);
    });
  }

  createLog(): void {
    // open blank modal form
    console.log('Creating new log');
    this.showLogForm(new Log());
  }

  editLog(logId: number): void {
    // open modal to edit log
    console.log('Editing log id: ' + logId);

    let log: Log = this.grid.rows.find(l => l.id === logId);
    this.showLogForm(log);
  }

  reloadLogs(logType: number): void {
    this.logService.getLogs(logType).subscribe((data: GridData) => {
      console.log(data);
      this.grid.rows = Log.mapJsonResponse(data.rows);
    }, err => {
      console.log(err);
    });
  }

  private showLogForm(log: Log): void {
    let modalRef = this.modalService.open(LogModalComponent, { size: 'lg' });
    
    (modalRef.componentInstance as LogModalComponent).log = log;
    (modalRef.componentInstance as LogModalComponent).logTypes = this.grid.types;

    modalRef.result.then((result: Log) => {
      if (!log.id) {
        // create new log
        this.logService.createLog(result).subscribe(res => {
          //todo get value from dropdown
          this.reloadLogs(0);
        });
      }
      else {
        //update existing log
        this.logService.updateLog(result).subscribe(res => {
          //todo get value from dropdown
          this.reloadLogs(0);
        })
      }
    }).catch(reason => {
      console.log(reason);
    });
  }
}

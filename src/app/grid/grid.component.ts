import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  logTypeId: number;

  constructor(
    private modalService: NgbModal,
    private logService: LogDataService
  ) {
    //default dropdown
    this.logTypeId = 0;
    this.grid = new GridData();
  }

  ngOnInit() {
    this.logService.getLogs().subscribe(
      (data: GridData) => {
        // sets all returned data
        this.grid = data;
        // handle special object relational mapping
        this.grid.types = LogType.mapJsonResponse(data.types);
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
          this.reloadLogs();
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

  reloadLogs(): void {
    this.logService.getLogs(this.logTypeId).subscribe((data: GridData) => {
      this.grid.rows = Log.mapJsonResponse(data.rows);
    }, err => {
      console.log(err);
      alert(err);
    });
  }

  getPaginationText(): string {
    console.log(this.grid.pageNumber);
    return 'Showing ' 
    + (((this.grid.pageNumber - 1) * this.grid.pageSize) + 1)
    + ' - ' 
    + (this.grid.rows.length + (this.grid.pageSize * (this.grid.pageNumber - 1))) 
    + ' of '
    + this.grid.totalRows;
  }

  private showLogForm(log: Log): void {
    let modalRef = this.modalService.open(LogModalComponent, { size: 'lg' });
    
    (modalRef.componentInstance as LogModalComponent).log = log;
    (modalRef.componentInstance as LogModalComponent).logTypes = this.grid.types;

    modalRef.result.then((result: Log) => {
      if (!log.id) {
        // create new log
        this.logService.createLog(result).subscribe(res => {
          this.reloadLogs();
        });
      }
      else {
        //update existing log
        this.logService.updateLog(result).subscribe(res => {
          this.reloadLogs();
        })
      }
    }).catch(reason => {
      console.log(reason);
    });
  }
}

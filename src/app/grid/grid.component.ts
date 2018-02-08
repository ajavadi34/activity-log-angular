import { Component, OnInit } from '@angular/core';
import { GridData } from '../shared/models/Grid';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { LogModalComponent } from '../shared/modals/log-modal/log-modal.component';
import { LogDataService } from '../shared/services/log-data.service';
import { ConfirmationModalComponent } from '../shared/modals/confirmation-modal/confirmation-modal.component';
import { Log } from '../shared/models/Log';

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
    this.grid.headers = ['Type', 'Title', 'Description', 'Date', ''];
  }

  ngOnInit() {
    this.grid.rows = this.logService.getLogs();
  }

  deleteLog(logId: number, event: any): void {
    // delete log
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

  private showLogForm(log: Log): void {
    let modalRef = this.modalService.open(LogModalComponent, { size: 'lg' });
    (modalRef.componentInstance as LogModalComponent).log = log;
    modalRef.result.then(result => {

    }).catch(reason => {
      console.log(reason);
    });
  }
}

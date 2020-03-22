import { Component, OnInit, Input } from '@angular/core';
import { LogType } from '../../models/LogType';
import { LogDataService } from '../../services/log-data.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LogTypeService } from '../../services/log-type.service';

@Component({
  selector: 'app-manage-log-types',
  templateUrl: './manage-log-types.component.html',
  styleUrls: ['./manage-log-types.component.css']
})
export class ManageLogTypesComponent {
  @Input() logTypes: LogType[];
  public editTypeId: number;
  public newTypeName: string;

  constructor(
    private logService: LogDataService,
    private activeModal: NgbActiveModal,
    private logTypeService: LogTypeService
  ) { }

  close(): void {
    this.activeModal.dismiss();
  }

  addType(): void {
    if (!this.newTypeName || this.newTypeName.trim().length === 0) {
      return;
    }

    this.logTypeService.createLogType(this.newTypeName).subscribe(res => {
      // append new log type to type array
      let log = LogType.mapJsonResponse(res);
      this.logTypes.push(log[0]);

      // reset field
      this.newTypeName = null;
    }, err => {
      console.log(err);
    });
  }

  toggleRow(typeId: number): void {
    if (!this.editTypeId) {
      // put row in edit mode
      this.editTypeId = typeId;
      return;
    }

    this.save(typeId);
  }

  save(typeId: number): void {
    // a row was in edit mode
    let logType: LogType = this.logTypes.find(l => l.typeId == typeId);
    if (this.editTypeId == typeId) {
      // save updated type name
      this.logTypeService.updateLogType(logType).subscribe(res => console.log(res), err => console.log(err));
    }

    // removed row from edit mode
    this.editTypeId = undefined;
  }

  deleteType(typeId: number): void {    
    if (confirm('Are you sure you want to delete this type?'))
      this.logTypeService.deleteLogType(typeId).subscribe(res => this.close(), err => console.log(err)); 
  }

  getTitle(hasTasks: boolean): string {
    return hasTasks ? "Delete disabled" : "Delete log";
  }
}

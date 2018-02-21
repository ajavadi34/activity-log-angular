import { Component, OnInit, Input } from '@angular/core';
import { LogType } from '../../models/LogType';
import { LogDataService } from '../../services/log-data.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-manage-log-types',
  templateUrl: './manage-log-types.component.html',
  styleUrls: ['./manage-log-types.component.css']
})
export class ManageLogTypesComponent implements OnInit {
  @Input() logTypes: LogType[];
  public editTypeId: number;

  constructor(private logService: LogDataService, private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close(): void {
    this.activeModal.dismiss();
  }

  addType(newTypeName: string): void {
    // todo: call service to save new type
    this.logTypes.push({
      typeId: Math.max.apply(Math, this.logTypes.map(function(o){return o.typeId})) + 1,
      name: newTypeName
    });
  }

  toggleRow(typeId: number): void {
    if (!this.editTypeId) {
      // put row in edit mode
      this.editTypeId = typeId;
    }
    else {
      // a row was in edit mode
      this.editTypeId = undefined;

      if (this.editTypeId == typeId) {
        // save updated type name
      }
    }
  }
}

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

  constructor(private logService: LogDataService, private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close(): void {
    this.activeModal.dismiss();
  }
}

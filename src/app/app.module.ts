import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { LogModalComponent } from './shared/modals/log-modal/log-modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogDataService } from './shared/services/log-data.service';
import { ConfirmationModalComponent } from './shared/modals/confirmation-modal/confirmation-modal.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ManageLogTypesComponent } from './shared/modals/manage-log-types/manage-log-types.component';
import { LogTypeService } from './shared/services/log-type.service';

const routes = [];

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LogModalComponent,
    ConfirmationModalComponent,
    ManageLogTypesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [LogDataService, LogTypeService],
  bootstrap: [GridComponent],
  entryComponents: [LogModalComponent, ConfirmationModalComponent, ManageLogTypesComponent]
})
export class AppModule { }

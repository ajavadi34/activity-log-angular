import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { LogModalComponent } from './shared/modals/log-modal/log-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogDataService } from './shared/services/log-data.service';
import { ConfirmationModalComponent } from './shared/modals/confirmation-modal/confirmation-modal.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    LogModalComponent,
    ConfirmationModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [LogDataService],
  bootstrap: [GridComponent],
  entryComponents: [LogModalComponent, ConfirmationModalComponent]
})
export class AppModule { }

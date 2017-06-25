import { AccountDataService } from './../services/account-data.service';
import { LoggingService } from './../services/logging.service';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();
  constructor(/*private loggingService: LoggingService, */private accountDataService: AccountDataService) {
    //this.loggingService.loglevel = "WARN";
    //console.log("In Constructor of AccountComponent");
  }
  ngOnInit() {
    console.log("In ngOnInit");

  }
  ngOnDestroy() {
    console.log("In ngOnDestroy");

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("In ngOnChanges: ", changes);
  }
  ngDoCheck() {
    console.log("In ngDoCheck");
  }

  onSetTo(status: string) {
    this.accountDataService.updateStatus(this.id, status);
    //this.statusChanged.emit({ id: this.id, newStatus: status });
    //this.loggingService.logAccountDetails(status);
    this.accountDataService.statusUpdated.emit(status);
  }
}

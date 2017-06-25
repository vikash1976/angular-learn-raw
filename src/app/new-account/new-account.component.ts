import { AccountDataService } from './../services/account-data.service';
import { LoggingService } from './../services/logging.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [AccountDataService]
})
export class NewAccountComponent implements OnInit{
  //@Output() accountAdded = new EventEmitter<{ name: string, status: string }>();
  accountName: string;
  constructor(/*private loggingService: LoggingService, */private accountDataService: AccountDataService) {
    //this.loggingService.loglevel = "INFO";
  }
  ngOnInit() {
    this.accountDataService.statusUpdated.subscribe((status: string) => alert("New Status is: "+ status));
    

  }
  onCreateAccount(accountStatus: string) {
    this.accountDataService.addAccount(this.accountName, accountStatus);
    /*this.accountAdded.emit({
      name: this.accountName,
      status: accountStatus
    });*/

    //this.loggingService.logAccountDetails(accountStatus);
  }
}

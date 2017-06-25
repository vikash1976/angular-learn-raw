import { AccountDataService } from './../services/account-data.service';
import { LoggingService } from './../services/logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService, AccountDataService]
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

constructor(private loggingService: LoggingService, 
  private accountDataService: AccountDataService){}
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountDataService.addAccount(accountName, accountStatus);
    this.loggingService.logAccountDetails(accountStatus);
  }
}

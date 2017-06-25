import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountDataService {

  constructor(private loggingService: LoggingService) { }

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated: EventEmitter<string> = new EventEmitter<string>();

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logAccountDetails(status);

  }
  updateStatus(idx: number, status: string) {
    this.accounts[idx].status = status;
    this.loggingService.logAccountDetails(status);
  }

}

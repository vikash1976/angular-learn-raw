import { AccountDataService } from './../services/account-data.service';
import { LoggingService } from './../services/logging.service';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService, AccountDataService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
constructor(private loggingService: LoggingService, private accountDataService: AccountDataService) {
  console.log("In Constructor");
}
ngOnInit() {

  console.log("In ngOnInit");

}
ngOnDestroy(){
  
  console.log("In ngOnDestroy");

}
ngOnChanges(changes: SimpleChanges){
    console.log("In ngOnChanges: ", changes);
  }

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountDataService.updateStatus(this.id, status);
    this.loggingService.logAccountDetails(status);
  }
}

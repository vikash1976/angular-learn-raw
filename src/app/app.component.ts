import { LoggingService } from './services/logging.service';
import { AccountDataService } from './services/account-data.service';
import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Task } from './commons/tasks';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountDataService, LoggingService]
})
export class AppComponent {

  accounts: { name: string, status: string }[] = [];


  /*accounts = [
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
  ];*/
  myNumberEmitter: Observable<number>;
  myCustomObservable: Observable<string>;

  myCustomObservableSubs = new Subscription();
  constructor(/*private loggingService: LoggingService, */private accountDataService: AccountDataService) {
    //this.loggingService.loglevel = "WARN";

    let idx = _.findIndex(this.accounts, { name: 'Hidden Account', status: 'unknown' });
    console.log("Hey, Hidden Account, i found you, you are here at position: " + idx);
  }

  ngOnInit() {

    //this.accountDataService.statusUpdated.subscribe((status: string) => alert("New Status is: "+ status));
    this.accounts = this.accountDataService.accounts;
    this.myNumberEmitter = Observable.interval(3000);
    //.map((data: number) => { return data + 5 })
    //.filter((data: number) => data % 2 == 0 );
    this.myCustomObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("data pack one");
      }, 2000);
      setTimeout(() => {
        observer.next("data pack two");
      }, 4000);
      /*setTimeout(() => {
        observer.error("erroring by choice!");
      }, 6000);*/
      setTimeout(() => {
        observer.next("data pack three");
      }, 7000);
      /*setTimeout(() => {
        observer.complete();
      }, 8000)*/
    }

    )
  /*  this.myNumberEmitter.subscribe(
      (num) => console.log(num)
    );*/

    this.myCustomObservableSubs = this.myCustomObservable.subscribe(
      (dataPack) => console.log(dataPack),
      (error) => console.error(error),
      () => console.info("Observable seems completed itself!!!")
    );
  }
  onAccountAdded(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount);
    //this.loggingService.logAccountDetails("Account added: " + newAccount);

  }

  onStatusChanged(updateInfo: { id: number, newStatus: string }) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    //this.loggingService.logAccountDetails("Account updated: " + updateInfo);
  }
  onAccountDeleted() {
    this.accounts.splice(this.accounts.length - 1, 1);
    this.myNumberEmitter.subscribe(
      (num) => console.log(num)
    );

    /*this.myCustomObservable.subscribe(
      (dataPack) => console.log(dataPack),
      (error) => console.error(error),
      () => console.info("Observable seems completed itself!!!")
    );*/
  }

  ngOnDestroy() {
    this.myCustomObservableSubs.unsubscribe();
  }


}







/*title = 'Angular App Works!';
  myObject = {
    gender: 'male',
    age: 39,
    location: 'IN'
  };
  defaultTaskPriority: number = 5;
  aNameList = [
    "Andy",
    "Randy",
    "Brandy",
    "Joe"
  ]

  tempIdentifier = 1;

  ngOnInit() {
     //console.log("Here I use lodash: ", _.chunk(['a', 'b', 'c', 'd'], 2));
  }

  taskList : Array<Task> = [
      {
        task: "Finalize Destination",
        status: 0
      },
      {
        task: "Book Air tickets",
        status: 1
      },
      {
        task: "Book Hotel room",
        status: 1
      }
    ];

    taskStateChanged(task) {
      let idx = _.findIndex(this.taskList, task);
      this.taskList.splice(idx, 1, {task: task.task, status: 0});

      console.log("Task changing state: ", task);

    }

    onTaskAdded(event) {
      console.log(event);
      this.taskList.push(event);
      //this.defaultTaskPriority = 0;
    }

    destroyTaskList() {
      this.taskList.splice(0,this.taskList.length);
    }*/
import { Injectable } from '@angular/core';


export class LoggingService {
  loglevel: string = "INFO";
  constructor() { }
  logAccountDetails(status: any) {
    if (this.loglevel === "INFO") {
      console.info('Account status changed, new status: ' + status);
    } else {
      console.warn('Account status changed, new status: ' + status);
    }
  }

}

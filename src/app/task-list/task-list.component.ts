import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';
import { Task } from '../commons/tasks';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {

 @Input()
 taskList : Array<Task>;
 @Output()
 taskStateChanged = new EventEmitter<Task>();
  constructor() { }

  ngOnInit() {
    /*this.taskList = [
      {
        task: "A",
        status: 1
      },
      {
        task: "B",
        status: 2
      },
      {
        task: "C",
        status: 1
      }
    ];*/

  }
  onTaskStateChange(task){
    this.taskStateChanged.emit(task);

  }
  ngOnChanges(changes: SimpleChanges){
    console.log("In ngOnChanges: ", changes);
  }
  getButtonText(task){
    return task.status === 0 ? 'Done':'ToDo';
  }

  ngOnDestroy() {
    console.log("In ngOnDestroy");
  }


}

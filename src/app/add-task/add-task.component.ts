import { 
  Component, 
  OnInit, 
  EventEmitter, 
  Output, 
  ViewChild, 
  ElementRef, 
  SimpleChanges,
  OnChanges,
  Input
} from '@angular/core';
import { Task } from '../commons/tasks';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit, OnChanges {

//@Input() priority: number;
@Output('task-added')
taskAdded :EventEmitter<Task> = new EventEmitter();
  constructor() {
    console.log("In c'tor");
   }

  ngOnInit() {
    console.log("In ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("In ngOnChanges: ", changes);
  }
//@ViewChild('taskData') taskData: ElementRef;
  onAddTask(taskData) {
    this.taskAdded.emit({task: taskData.value , status: 1});
    //this.taskData.nativeElement.value

  }
    

}

import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {ActivityService} from './worklist.service';
import {Activity} from './activity';

@Component({
    selector: 'my-worklist-add',
    template: `
       <!-- (ngSubmit)="onSubmit(f)" -->
            <div class="container">
            <form (ngSubmit)="onSubmit()" #f="ngForm">
                    <div id="taskData" ngModelGroup="taskData">
                    <div class="form-group">
                        <label for="value">Activity</label>
                        <input ngModel name="task" type="text" class="form-control" id="value" 
                        required #task="ngModel">
                        <span class="help-block" *ngIf="task.invalid && task.touched">
                        This is a required field!</span>
                        <label for="priority">Priority</label>
                        <input ngModel name="priority" type="number" class="form-control" id="priority">
                    </div>
                    </div>
                    <div class="radio" *ngFor="let day of daysOfWeek">
                        <label>
                            <input type="radio"
                            name="dayOfWeek"
                            
                            [ngModel]="'Thu'"
                            [value]="day">
                        {{day}}
                        </label>
                    </div>
                   <button class="btn btn-primary spacing" [disabled]="f.invalid">Add Activity</button>
                    
                </form>
            
            <button class="btn btn-default spacing" (click)="onSuggestTask()">Suggest Task Name</button>
            </div>
    `
})

export class WorklistAddComponent {
    @ViewChild('f') taskForm:NgForm; //another way to get template local variable in component.
    daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    defaultDay = "Fri"
    constructor(private _activityService: ActivityService) {}
    /*onSubmit(form:NgForm) {
            const activity:Activity = new Activity(form.value.task, form.value.priority);
            
            this._activityService.create(activity);
    }*/

    onSubmit() {
        console.log(this.taskForm.value);
            const activity:Activity = new Activity(this.taskForm.value.taskData.task, 
            this.taskForm.value.taskData.priority);
            
            this._activityService.create(activity);
    }
    onSuggestTask() {
        this.taskForm.setValue({
            taskData: {
                task: this.taskForm.value.taskData.task || "Go Swimming",
                priority: this.taskForm.value.taskData.priority || 12
            },
            dayOfWeek: this.taskForm.value.dayOfWeek || 'Wed'
        })
    }


}
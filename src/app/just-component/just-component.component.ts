import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-just-component',
  templateUrl: './just-component.component.html',
  styleUrls: ['./just-component.component.css']
})
export class JustComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("In ngDoCheck - JustComponentComponent");
  }
}

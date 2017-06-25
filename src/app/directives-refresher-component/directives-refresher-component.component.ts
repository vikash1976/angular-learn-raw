import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-refresher-component',
  templateUrl: './directives-refresher-component.component.html',
  styleUrls: ['./directives-refresher-component.component.css']
})
export class DirectivesRefresherComponentComponent implements OnInit {

  evenNumbers = [2, 4, 6, 8];
  oddNumbers = [1, 3, 5];
  onlyOdd = false;
  manyValues = 10;
  constructor() { }

  ngOnInit() {
  }

}

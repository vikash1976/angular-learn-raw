import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-other-component',
  templateUrl: './my-other-component.component.html',
  styleUrls: ['./my-other-component.component.css']
})
export class MyOtherComponentComponent implements OnInit {
imageSrcUrl = "";
changedColor : string;
email:string = "me@wordpress.com";
  elements: number [] = [];
  constructor() { }

  ngOnInit() {
    this.changedColor = "blue";
  }
  onAddElements() {
    this.elements.push(this.elements.length + 1);
    this.imageSrcUrl = "assets/download" + this.elements.length + ".jpg";
  }
  getColor(e) {
   this.changedColor = e % 2 === 0 ? 'skyblue' : 'grey';
   return  e % 2 === 0 ? 'skyblue' : 'grey';
  }

}

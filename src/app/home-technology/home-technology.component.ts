import { Component, OnInit } from '@angular/core';
declare function require(url: string);
var data = require('../../assets/data/data.json');

@Component({
  selector: 'app-home-technology',
  templateUrl: './home-technology.component.html',
  styleUrls: ['./home-technology.component.scss']
})
export class HomeTechnologyComponent implements OnInit {

  technologyImg = data.techImg;

  constructor() { }

  ngOnInit() {
  }

}

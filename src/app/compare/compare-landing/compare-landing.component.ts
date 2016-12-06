import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-landing',
  templateUrl: './compare-landing.component.html',
  styleUrls: ['./compare-landing.component.css']
})
export class CompareLandingComponent implements OnInit {
  dummyArray:any[];
  tileSize:number;
  tileOptions:any[];
  constructor() { }

  filterHeight:any;
  filterWidth:any;
  ngOnInit() {    
    //this.tileOptions= [{ label: '2', value: 2 },{ label: '3', value: 3 },{ label: '4', value: 4 }]
  }
  
  onChange(event: number){
    this.dummyArray = Array(event).fill(1);
    console.log(this.dummyArray.length);
  }
}

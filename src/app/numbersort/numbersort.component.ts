import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbersort',
  templateUrl: './numbersort.component.html',
  styleUrls: ['./numbersort.component.scss']
})
export class NumbersortComponent implements OnInit {
  numberSort: [];

  constructor() { }

  ngOnInit(): void {
  }

  submit(numbersort){
    console.log(this.numberSort);
    let myFunc = num => Number(num);
    var intArr = Array.from(String(this.numberSort), myFunc);
    intArr = intArr.sort();
    console.log(intArr);
    
  }

}

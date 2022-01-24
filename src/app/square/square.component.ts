import { Component, OnInit } from '@angular/core';
import { Shape } from '../shape';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent extends Shape implements OnInit {

  length: number = 0;
  height: number = 0;
  perimeter: number = 0;
  area: number = 0;

  constructor() { 
    super();
   }

  ngOnInit(): void {
  }

  runCalculations(length: number, height:number){
    this.calculatePerimeter(length, height)
    this.calculateArea(length, height)
  }

  public calculatePerimeter(L:number, H:number): number
  {
    this.perimeter = Math.pow(L, 2) + Math.pow(H, 2);
    return this.perimeter;
  }

  public calculateArea(L: number, H: number): number {
    this.area = L * H;
    return this.area;
  }
}
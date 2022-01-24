import { Component, OnInit } from '@angular/core';
import { Shape } from '../shape';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent extends Shape implements OnInit {

  length: number = 0;
  height: number = 0;
  perimeter: number = 0;
  area: number = 0;

  constructor() { 
    super();
  }

  ngOnInit(): void {
  }

  public calculatePerimeter(L:number, H:number)
  {
    return Math.pow(L, 2) + Math.pow(H, 2);
  }

  public calculateArea(L:number, H:number)
  {
    return L * H;
  }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter = 2;

  addOne() {
    this.counter++;
  }

  minusOne() {
    this.counter--;
  }
}

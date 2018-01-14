import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(CounterComponent)
  private counterComponent: CounterComponent;

  ngAfterViewInit(): void {
    console.log(this.counterComponent.counter);
  }

  onAddOneClick() {
    this.counterComponent.addOne();
  }

  onMinusOneClick() {
    this.counterComponent.minusOne();
  }
}

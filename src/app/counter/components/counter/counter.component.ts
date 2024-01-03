import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  public counter: number = 0;

  public increaseBy(quantity: number): void {
    this.counter += quantity;
  }
  public resetCounter(): void {
    this.counter = 10;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;
  public touched: boolean = false;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(name: string): void {
    this.name = name;
    this.touched = true;
  }
  changeAge(age: number): void {
    this.age = age;
    this.touched = true;
  }
  resetValues(): void {
    this.name = 'ironman';
    this.age = 45;
    this.touched = false;
  }
}

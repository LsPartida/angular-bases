import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public Heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'She-Hulk',
    'Thor',
  ];
  public deleted: string = '';

  deleteHero(): void {
    const deletedHero = this.Heroes.pop();
    if (deletedHero !== undefined) {
      this.deleted = deletedHero;
    }
  }
}

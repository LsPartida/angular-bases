import { Component } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  public characters: Character[] = [
    { name: 'Krillin', power: 500 },
    { name: 'Goku', power: 10000 },
    { name: 'Vegeta', power: 7500 },
  ];

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  onDeleteCharacter(index: number): void {
    this.characters.splice(index,1);
  }
}

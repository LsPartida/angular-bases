import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'dbz-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css',
})
export class ListadoComponent {
  @Input() characters: Character[] = [];
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id: string): void {
    if (!id) {
      return;
    }
    this.onDeleteId.emit(id);
  }
}

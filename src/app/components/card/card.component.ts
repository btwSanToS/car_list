import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() item: any;

  @Output() detalhar = new EventEmitter<any>();
  emitirDetalhar(item: any) {
    this.detalhar.emit(item);
  }
}
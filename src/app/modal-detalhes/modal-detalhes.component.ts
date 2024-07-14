import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-detalhes',
  standalone: true,
  templateUrl: './modal-detalhes.component.html',
  styleUrls: ['./modal-detalhes.component.scss'],
})
export class ModalDetalhesComponent {
  @Input() item: any;
  @Output() fecharModal = new EventEmitter<void>();

  fechar() {
    this.fecharModal.emit();
  }
}
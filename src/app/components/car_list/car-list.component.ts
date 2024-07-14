import { Component, OnInit, Renderer2} from '@angular/core';
import { CarDataService } from '../../services/car-data.service';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ModalDetalhesComponent } from '../../modal-detalhes/modal-detalhes.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  imports: [CommonModule, CardComponent, ModalDetalhesComponent],
})
export class AppComponent implements OnInit {
  title = 'angular-car-example';
  carData: any;
  mostrarModal = false;
  itemSelecionado: any;

  abrirModal(item: any) {
    this.itemSelecionado = item;
    this.mostrarModal = true;
    this.renderer.addClass(document.body, 'no-scroll');
  }

  fecharModal() {
    this.mostrarModal = false; 
    this.renderer.removeClass(document.body, 'no-scroll');
  }

  constructor(private carDataService: CarDataService, private renderer:Renderer2){}

  ngOnInit(): void {
    this.carDataService.getCarData().subscribe((data) => {
      this.carData = data;
    });
  }
}
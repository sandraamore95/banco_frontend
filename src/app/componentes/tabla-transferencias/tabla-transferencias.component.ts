import { Component, Input } from '@angular/core';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-tabla-transferencias',
  templateUrl: './tabla-transferencias.component.html',
  styleUrls: ['./tabla-transferencias.component.css']
})
export class TablaTransferenciasComponent {

  @Input() transferencias: any[] = [];

  constructor(private transferenciaService: TransferenciaService) {}
}

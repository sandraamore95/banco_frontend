import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';



@Component({
  selector: 'app-detalle-transferencia',
  templateUrl: './detalle-transferencia.component.html',
  styleUrls: ['./detalle-transferencia.component.css']
})
export class DetalleTransferenciaComponent {
  

  transferencia: any = null;

  cliente : any;

  constructor(private route: ActivatedRoute, private transferenciaService: TransferenciaService, private clienteService: ClienteService) {}

  ngOnInit(): void {

    const transferenciaIdString = this.route.snapshot.paramMap.get('id');
    let transferenciaId;
    if (transferenciaIdString) {
      transferenciaId = parseInt(transferenciaIdString);
      console.log({ transferenciaId })
      this.cargarTransferencia(transferenciaId);
    }
  }


  cargarTransferencia(id: number){
    this.transferenciaService.obtenerTransferenciaPorId(id).subscribe(
      (transferencia: any) => {
        console.log(transferencia);
        this.transferencia = transferencia;
      }
    )
  }

}

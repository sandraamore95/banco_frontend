import { Component } from '@angular/core';
import { transferenciasRecibidas } from 'src/app/datos/transferencias-ejemplos';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';
@Component({
  selector: 'app-transferencias-recibidas',
  templateUrl: './transferencias-recibidas.component.html',
  styleUrls: ['./transferencias-recibidas.component.css']
})
export class TransferenciasRecibidasComponent {

  transferencias: any[] = [];

  cliente : any;

  constructor(private transferenciaService : TransferenciaService, private clienteService: ClienteService){
  }

  ngOnInit(){
      this.cliente = this.clienteService.userlogged();
      if(this.cliente != null) {
        this.cargarTransferenciasPorIdBeneficiario()
      } else { console.log("No has iniciado sesión")}
  }

  cargarTransferencias(){
    this.transferenciaService.obtenerTransferencias().subscribe((transferencias: any) => {
      console.log({transferencias});
      this.transferencias = transferencias;
    });
  }
  cargarTransferenciasPorIdBeneficiario(){
     // clientedestino = cliente.id
    this.transferenciaService.obtenerTransferenciasPorIdBeneficiario(this.cliente.id).subscribe((transferencias: any) => {
      console.log({transferencias});
      this.transferencias = transferencias;
    });
  }
  
}

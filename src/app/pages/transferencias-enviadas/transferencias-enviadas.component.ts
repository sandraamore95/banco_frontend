import { Component } from '@angular/core';
import {transferenciasEnviadas} from 'src/app/datos/transferencias-ejemplos';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-transferencias-enviadas',
  templateUrl: './transferencias-enviadas.component.html',
  styleUrls: ['./transferencias-enviadas.component.css']
})
export class TransferenciasEnviadasComponent {

  transferencias: any[] = [];

  cliente : any;
  
  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService){}

  ngOnInit() {
    this.cliente = this.clienteService.userlogged();
    // si el cliente esta logeado puede ver la ventana
    if (this.cliente =! null) {
      this.cargarTransferenciasPorIdOrdenante();
    }
    else{
      console.log("No has iniciado sesión");
    }
  }

  cargarTransferencias(){
    this.transferenciaService.obtenerTransferencias().subscribe(
      (transferencias: any) => {
        console.log(transferencias);
        this.transferencias = transferencias;
      }
    )
  }
  
  cargarTransferenciasPorIdOrdenante(){
    this.cliente = this.clienteService.userlogged();
    // clienteorigen = cliente.id
    this.transferenciaService.obtenerTransferenciasPorIdOrdenante(this.cliente.id).subscribe(
      (transferencias: any) => {
        console.log(transferencias);
        this.transferencias = transferencias;
      }
    )
  }
}

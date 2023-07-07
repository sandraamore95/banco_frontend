import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  transferencias: any[] = [];
  cliente: any =null;
  constructor(private transferenciaService: TransferenciaService, private clienteService: ClienteService){}

  ngOnInit(): void {
    this.cliente = this.clienteService.userlogged();
    console.log('Logueado: ', this.cliente);
  
  }
  cargarTransferencias(){
    this.transferenciaService.obtenerTransferencias().subscribe(
      (transferencias: any) => {
        console.log(transferencias);
        this.transferencias = transferencias;
      }
    )
  }
}

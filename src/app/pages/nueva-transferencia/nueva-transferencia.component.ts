import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: './nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.css']
})
export class NuevaTransferenciaComponent {
  constructor(private transferenciaService: TransferenciaService,
    private clienteService: ClienteService, private snackBar: MatSnackBar) {
    
  }
  
  ordenante: any = null;
  

  ngOnInit(): void {
    this.ordenante = this.clienteService.userlogged()
  }

  nuevaTransferencia: any = {
    clienteOrdenante: {
      id: null,
    },
    clienteDestino: {
    id: null,
    },
    concepto: '',
    importe: 0
  };

  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addTransferencia(){
    if(this.ordenante){
      this.nuevaTransferencia.clienteOrdenante.id = this.ordenante.id
      console.log(this.nuevaTransferencia);
      this.transferenciaService.guardar(this.nuevaTransferencia).subscribe(
        (transferenciaGuardada) => {
          console.log({transferenciaGuardada})
          this.openSnackBar("Se ha realizado la transferencia correctamente", "vale")
        },
        (error)=> {
          this.openSnackBar("Ha ocurrido un error", "vale")
        })
    }
  }
}

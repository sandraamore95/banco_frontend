import { Component } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import { MensajeService } from 'src/app/services/mensaje/mensaje.service';
@Component({
  selector: 'app-micuenta',
  templateUrl: './micuenta.component.html',
  styleUrls: ['./micuenta.component.css']
})
export class MicuentaComponent {
  cliente: any = null;
  passw: any
  mensajes: any[] = [];
  constructor(private clienteService: ClienteService,private mensajeService:MensajeService, private snackBar: MatSnackBar){
  }

  //obtener los mensajes del gestor
  cargarMensajesGestor(){
    this.mensajeService.obtenerMensajesMiGestor(this.cliente.id).subscribe(
      (mensajes: any) => {
        console.log(mensajes);
        this.mensajes = mensajes;
      }
    )
  }

  ngOnInit():void {
//inicializamos el objeto cliente 
    this.cliente=this.clienteService.userlogged();
    this.mensajeService.obtenerMensajesMiGestor(this.cliente.id).subscribe(
      (mensajes: any) => {
        console.log(mensajes);
        this.mensajes = mensajes;
      }
    )

  }
    openSnackBar(message: string, action: string){
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

    changePassw(){
      console.log(this.cliente);
     this.clienteService.changePassw(this.cliente.id,this.passw).subscribe((cliente => {
        this.openSnackBar("Se ha modificado la contraseña correctamente", "Aceptar")
      } 
      ))
    }

    

}

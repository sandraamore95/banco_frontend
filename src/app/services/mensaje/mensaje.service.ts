import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  constructor(private http: HttpClient) { }

  urlApi : string = "http://localhost:8080/mensaje"

  //traer todas los mensajes
  obtenerMensajes(){
    return this.http.get(this.urlApi);
  }

  //obtener mensaje por id
  obtenerMensajePorId(id: number){
    return this.http.get(`${this.urlApi}/${id}`);
  }

  //obtener mensajes del gestor
  obtenerMensajesMiGestor(id_cliente: number){
    return this.http.get(`${this.urlApi}/mensajes-enviados/${id_cliente}`);
   
  }
  


  //guardar una mensaje para el gestor (aunque no se veran xd)
  guardar(transferencia: any){
    return this.http.post(this.urlApi, transferencia);
  }
}

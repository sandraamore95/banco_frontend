import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlApi: string = "http://localhost:8080/cliente"

  constructor(private http: HttpClient) { }

  obtenerClientes(){
    return this.http.get(this.urlApi);
  }

  //endpoint changePassw   cliente/password/7/rer
  changePassw(cliente_id:string , new_passw:string){
    const url = `${this.urlApi}/password/${cliente_id}`;
    const clienteDetails = {
      password:new_passw
    }
    return this.http.put(url,clienteDetails); //return cliente
  }



  login(correo: string, passw: string){
    const url = `${this.urlApi}/login?mail=${correo}&password=${passw}`;
    return this.http.get(url); //return cliente

  }

  //RECOGEMOS EL CLIENTE LOGEADO
  crearSesion(clienteLogueado: any){
    const clienteJSON = JSON.stringify(clienteLogueado)
    sessionStorage.setItem("sesion", clienteJSON);
  }

  userlogged(){
    const clienteJSON = sessionStorage.getItem("sesion");
    if(clienteJSON) {
    const clienteLogueado = JSON.parse(clienteJSON);
    return clienteLogueado;
    }
    return null;
  
  }

  //CERRAR SESION
  cerrarSesion(){
    sessionStorage.removeItem("sesion");
  }

  //addCliente
  addCliente(cliente: any) {
    return this.http.post(this.urlApi, cliente);
  }
}

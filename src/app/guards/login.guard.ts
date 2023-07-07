import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ClienteService } from '../services/cliente/cliente.service';

export const loginGuard: CanActivateFn = (route, state) => {
    //inyectar servicio cliente
  const clienteService = inject(ClienteService);
  //leer sesion user
  const sesion = clienteService.userlogged();
  if (sesion) {
    return true;
  } else {
    return false;
  }
};
  


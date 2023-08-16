import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  login(nom: string, numero: string, email: string, password: string) {
    throw new Error('Method not implemented.');
  }
 
  
}

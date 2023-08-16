import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  nom: string='';
  numero: string='';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.nom, this.numero, this.email, this.password).subscribe(
      (data) => {
        
      },
      (error) => {
        this.errorMessage = 'Erreur de connexion. Veuillez vérifier vos informations d\'identification.';
      }
    );
  }
  constructor(private router: Router) {}

  redirectToInscription() {
    this.router.navigate(['/inscription']); 
  }
}


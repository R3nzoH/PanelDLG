import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule], // Asegúrate de importar FormsModule aquí
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() switchToRegister = new EventEmitter<void>();
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Aquí puedes agregar la lógica de autenticación
    
    this.router.navigate(['/home']);
   // console.log('Username:', this.username, 'Password:', this.password);
    
  }
  register () {

    this.router.navigate(['/register']);
  }
  showModal: boolean = false;
  goToRegister() {
    this.switchToRegister.emit();
  }
}


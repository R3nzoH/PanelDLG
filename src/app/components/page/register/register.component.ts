import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface Customer {
  name: string;
  ruc: string;
  address: string;
  email: string;
  phone: string;
  type: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() switchToLogin = new EventEmitter<void>(); // EventEmitter para cambiar a login

  customer: Customer = {
    name: '',
    ruc: '',
    address: '',
    email: '',
    phone: '',
    type: 'Cliente'
  };

  showModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  registerCustomer() {
    console.log('Cliente registrado:', this.customer);
    this.closeModal(); // Cierra el modal después del registro
  }

  onLoginClick() {
    this.switchToLogin.emit(); // Emite el evento para cambiar a login
  }
}

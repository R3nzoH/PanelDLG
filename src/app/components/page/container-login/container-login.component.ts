import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-container-login',
  standalone: true,
  imports: [CommonModule, LoginComponent, RegisterComponent],
  templateUrl: './container-login.component.html',
  styleUrls: ['./container-login.component.css'],
  animations: [
    trigger('slideAnimation', [
      state('login', style({ transform: 'translateX(0)', opacity: 1 })),
      state('register', style({ transform: 'translateX(100%)', opacity: 1 })),
      transition('login => register', [
        animate('0.5s ease', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ]),
      transition('register => login', [
        animate('0.5s ease', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ]),
    trigger('fadeAnimation', [
      state('register', style({ transform: 'translateX(0)', opacity: 1 })),
      state('login', style({ transform: 'translateX(0)', opacity: 1 })),
      transition('register => login', [
        animate('0.5s ease', style({ transform: 'translateX(100%)', opacity: 0 }))
      ]),
      transition('login => register', [
        animate('0.5s ease', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class ContainerLoginComponent {
  currentView: 'login' | 'register' = 'login';

  toggleView() {
    this.currentView = this.currentView === 'login' ? 'register' : 'login';
  }
}
import { Component } from '@angular/core';
import { SidebarComponent } from '../../sidebar/sidebar.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SidebarComponent, SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

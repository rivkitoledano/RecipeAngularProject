import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  logoutbe?:boolean=false
  logout() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    this.logoutbe=true
  }
}

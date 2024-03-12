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
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('id');

    this.logoutbe=true
  }
}

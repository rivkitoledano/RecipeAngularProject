import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { IdentificationRoutingModule } from './identification-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { LogoutComponent } from './component/logout/logout.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [LoginComponent,RegisterComponent,LogoutComponent],
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
     ButtonModule,HttpClientModule,IdentificationRoutingModule,CommonModule,ReactiveFormsModule,NavBarComponent,FooterComponent,NgbAlertModule],
   exports: [LoginComponent,RegisterComponent,LogoutComponent]
})
export class IdentificationModule { }

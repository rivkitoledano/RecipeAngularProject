import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { recipeRoutingModule } from '../recipe/recipe-routing.module';
import { IdentificationRoutingModule } from '../identification/identification-routing.module';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,recipeRoutingModule,IdentificationRoutingModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router,private _recipeService:recipeRoutingModule,private _userService:IdentificationRoutingModule ) { }

}

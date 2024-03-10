import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { recipeRoutingModule } from '../recipe/recipe-routing.module';
import { IdentificationRoutingModule } from '../identification/identification-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,IdentificationRoutingModule,recipeRoutingModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  constructor(private router: Router,private _recipeService:recipeRoutingModule,private _userService:IdentificationRoutingModule ) { }

}

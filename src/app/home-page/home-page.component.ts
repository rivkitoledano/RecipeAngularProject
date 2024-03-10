import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FooterComponent,NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
 
  constructor(private router:Router) {
    
  }
  toAllRecipe(){
    this.router.navigate(['/recipe/allRecipe'])
  }
}

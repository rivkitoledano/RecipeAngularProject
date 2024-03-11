import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../entities/recipe.model'; // Corrected import path
import { recipeRoutingModule } from '../../recipe-routing.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.css'] // Corrected `styleUrls`
})
export class SmallRecipeComponent {

  @Input()
  public recipe?: Recipe; // No errors with this corrected code

  constructor(private router:Router,private recipeRouter:recipeRoutingModule) { }
  showDetails(): void {
    var username = sessionStorage.getItem('name');

    // אם הערך קיים ב-Session Storage
    if (username !== null) {
      console.log(this.recipe?.id,"עיח")
      this.router.navigate(['/recipe', this.recipe?.id]);
    } 
    else
    this.router.navigate(['/identification/login']);


  }
}
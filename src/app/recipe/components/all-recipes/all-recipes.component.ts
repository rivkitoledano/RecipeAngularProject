import { Component ,OnInit} from '@angular/core';
import { RecipeService } from '../../../recipe.service';
import { Recipe } from '../../../../entities/recipe.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent implements OnInit {
  RecipeList?:Recipe[] ;

  constructor(private router: Router, private _RecipeService: RecipeService) { }
  ngOnInit(): void {
    this._RecipeService.getRecipeList().subscribe({
      next: (res) => {
        this.RecipeList = res
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('finish');
      }
    })
  }

}

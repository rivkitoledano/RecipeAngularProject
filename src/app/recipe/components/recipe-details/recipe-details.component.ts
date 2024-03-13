import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Recipe } from '../../../../entities/recipe.model';
import { RecipeService } from '../../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router'; // ייבוא משתנה ActivatedRoute
import { CategoryService } from '../../../category.service';
import { Category } from '../../../../entities/Category.model';
import { User } from '../../../../entities/user.model';
import { UserService } from '../../../user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent implements OnInit {
  recipeId?: number | any;// מזהה המתכון
  categoryId?: number | any;// מזהה הקטגוריה
  userId?: number | any;// מזהה המתכון
  imageDefault:string[]
  images?: string[]
  recipe?: Recipe
  category?: Category
  user?: User
  ingredients?: string[]
  instructions?: string[]
  rating = 8;
  optiondelete:boolean=false

  constructor(
    config: NgbCarouselConfig,
    private _recipeService: RecipeService,
    private route: ActivatedRoute,
    private _categoryService: CategoryService,
    private _userService:UserService,
    private router:Router
  ) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    // מקבל את המזהה של המתכון מה-Route
    this.recipeId = this.route.snapshot.paramMap.get('id'); // שימוש ב- snapshot על ה- ActivatedRoute
    this.initRecipe();

  }
  initRecipe() {
    this._recipeService.getRecipeById(this.recipeId).subscribe({
      next: (res) => {
        this.recipe = res;
        console.log(this.recipe);
        this.ingredients = this.recipe?.ingredients;
        this.instructions = this.recipe?.instructions;
        this.images = [this.recipe?.routingImage!, this.recipe?.routingImageExtend!];
        this.categoryId = this.recipe.categoryId;
        this.userId = this.recipe.userId;
        this.initCategory();
        this.initUser();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('finish recipe');
      }
    });
  }
  initCategory() {
    this._categoryService.getCategoryById(this.categoryId).subscribe({
      next: (res) => {
        this.category = res;
        console.log(this.category)
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('finish category');
      }
    });
  }
  initUser() {
    this._userService.getUserById(this.userId).subscribe({
      next: (res) => {

        this.user = res;
        console.log(this.user)
        if(this.user.password==sessionStorage.getItem('password')&&this.user.name==sessionStorage.getItem('name'))
        this.optiondelete=true
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('finish user');
      }
    });
  }
  deleteRecipe(){
    console.log(this.recipe.id)
    this._recipeService.deleteRecipe(this.recipe.id).subscribe({
      next: () => {
        Swal.fire(
          '',
          'מחקתי',
          'success'
        );
        this.router.navigate(['/recipe']);
      },
      error: (err) => {
       
        Swal.fire(
          'שגיאה!',
          'ניכשלתי.',
          'error'
        );
      }
    });
  }
  edit(){
    this.router.navigate(['/recipe/editRecipe', this.recipe?.id]);
  }
}





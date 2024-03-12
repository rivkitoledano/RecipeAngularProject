import { Input, OnInit } from '@angular/core';
import { Component, inject, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Recipe } from '../../../../entities/recipe.model';
import { RecipeService } from '../../../recipe.service';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../../entities/Category.model';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.css'
})
export class EditRecipeComponent implements OnInit {
  recipeToUpdate: Recipe|undefined;
  rating = 0;
  recipeForm?: FormGroup;
  recipeId:number;
  list: number[] = [6, 4, 7, 4, 6];
  categoryList?:Category[]
  constructor(private fb: FormBuilder, 
    private _recipeService: RecipeService,
    private _categoryService: CategoryService,
    private route:ActivatedRoute,
    private router:Router) {
    // קריאה לפונקציה initForm כדי לאתחל את הטופס
    this.initForm();
  }
  ngOnInit() {
    this.recipeId = Number(this.route.snapshot.paramMap.get('id')); // שימוש ב- snapshot על ה- ActivatedRoute
    
    console.log(this.recipeId)
    this.initRecipe()

    this.initCategories();
  }
  initRecipe(){
    
      this._recipeService.getRecipeById(this.recipeId).subscribe({
        next: (res) => {
          this.recipeToUpdate = res
          console.log(this.recipeToUpdate,"dfghjk")
          this.initForm();

        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          console.log('finish');
        }
      })
  }
  initCategories() {
    this._categoryService.getCategoryList().subscribe({
      next: (res) => {
        this.categoryList = res
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('finish');
      }
    })

  }
  private initForm() {
      this.recipeForm = this.fb.group({
          name: [this.recipeToUpdate ? this.recipeToUpdate.name : '', Validators.required],
          category: [this.recipeToUpdate ? this.recipeToUpdate.categoryId : '', Validators.required],
          preparation_time: [this.recipeToUpdate ? this.recipeToUpdate.preparationTime : '', Validators.required],
          difficulty: [this.recipeToUpdate ? this.recipeToUpdate.difficultyLevel : '', [Validators.required]],
          userId: [this.recipeToUpdate ? this.recipeToUpdate.userId : '', Validators.required],
          routingImage: [this.recipeToUpdate ? this.recipeToUpdate.routingImage : ''],
          ingredients: this.fb.array([]),
          instructions: this.fb.array([]),
      });
  
      if (this.recipeToUpdate) {
          this.recipeToUpdate.ingredients.forEach((ingredient: string) => {
              this.addIngredientFieldWithValue(ingredient);
          });
  
          this.recipeToUpdate.instructions.forEach((instruction: string) => {
              this.addInstructionFieldWithValue(instruction);
          });
      }
  }
  
  addIngredientFieldWithValue(value: string) {
      this.ingredientsArray.push(this.fb.control(value));
  }
  
  addInstructionFieldWithValue(value: string) {
      this.instructionsArray.push(this.fb.control(value));
  }
  




  get ingredientsArray() {
    return this.recipeForm?.get('ingredients') as FormArray;
  }

  addIngredientField() {
    this.ingredientsArray.push(this.fb.control(''));
  }
  onIngredientValueChanged(index: number) {
    const currentControl = this.ingredientsArray.at(index);
    const nextControl = this.ingredientsArray.at(index + 1);

    if (currentControl.value === '' && nextControl) {
      // אם התיבה הנוכחית ריקה ויש תיבה הבאה, מחק את התיבה הבאה
      this.ingredientsArray.removeAt(index + 1);
    }
  }

  get instructionsArray() {
    return this.recipeForm?.get('instructions') as FormArray;
  }

  addInstructionField() {
    this.instructionsArray.push(this.fb.control(''));
  }
  onInstructionsValueChanged(index: number) {
    const currentControl = this.instructionsArray.at(index);
    const nextControl = this.instructionsArray.at(index + 1);

    if (currentControl.value === '' && nextControl) {
      // אם התיבה הנוכחית ריקה ויש תיבה הבאה, מחק את התיבה הבאה
      this.instructionsArray.removeAt(index + 1);
    }
  }

  saveRecipe() {
    this.removeEmptyFields();
    const formData = this.recipeForm?.value;
    const difficultyLevel = this.rating;
    formData.difficulty = difficultyLevel;
    console.log('Form Data:', formData); // הדפסת הנתונים לבדיקה
    const newRecipe: Recipe = {
      ...this.recipeToUpdate,
      name: formData.name,
      categoryId: formData.category,
      preparationTime: formData.preparation_time,
      difficultyLevel: difficultyLevel,
      ingredients: formData.ingredients,
      instructions: formData.instructions,
      userId: formData.userId,
      routingImage: formData.routingImage
    };
    console.log( "recipeToUpdate",this.recipeToUpdate)

    console.log( "name",newRecipe)
    this._recipeService.updateRecipe(newRecipe,this.recipeToUpdate.id).subscribe({
      next: (res) => {
        Swal.fire(
					'המתכון התעדכן בהצלחה ',
					'♥️ תודה שעזרת לנו להשתפר',
					'success'
				  );
				 this.router.navigate(['/recipe/allRecipe']);
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        console.log('finish');
      }
    })
  }
  removeEmptyFields() {
    this.removeEmptyFieldsFromArray(this.ingredientsArray);
    this.removeEmptyFieldsFromArray(this.instructionsArray);
  }

  removeEmptyFieldsFromArray(array: FormArray) {
    const lastControl = array.at(array.length - 1);
    if (lastControl && lastControl.value === '') {
      array.removeAt(array.length - 1);
    }
  }
  private modalService = inject(NgbModal);
  closeResult = '';
  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result} ${this.rating}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
  cancelRecipe(){
    this.initForm();
  }
}







import { OnInit } from '@angular/core';
import { Component, inject, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Recipe } from '../../../../entities/recipe.model';
import { RecipeService } from '../../../recipe.service';
import { CategoryService } from '../../../category.service';
import { Category } from '../../../../entities/Category.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
	selector: 'app-add-recipe',
	templateUrl: './add-recipe.component.html',
	styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent implements OnInit {

	rating = 0;
	recipeForm?: FormGroup;
	dateAdded: Date | undefined;
	categoryList?:Category[]
	constructor(
		private fb: FormBuilder, 
		private _recipeService: RecipeService,
		private _categoryService: CategoryService,
		private router:Router) {
		// קריאה לפונקציה initForm כדי לאתחל את הטופס
		this.initForm();
	}
	ngOnInit() {
		this.initForm();
		this.initCategories();
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
			name: ['', Validators.required,Validators.minLength(2)],
			category: ['', Validators.required],
			preparation_time: ['', Validators.required,Validators.min(1)],
			difficulty: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
			routingImage: ['../../../../assets/images/background.jpg'],
			routingImageExtend:['../../../../assets/images/background.jpg'],
			ingredients: this.fb.array([this.fb.control('')]),
			instructions: this.fb.array([this.fb.control('')]),
		});
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
		const rating = this.rating;
		formData.difficulty = rating;
		console.log('Form Data:', formData); // הדפסת הנתונים לבדיקה
		const newRecipe: Recipe = {
            name: formData.name,
            categoryId: Number(formData.category),
            preparationTime: Number(formData.preparation_time),
            difficultyLevel: rating,
            ingredients: formData.ingredients,
            instructions: formData.instructions,
            userId: Number(sessionStorage.getItem('id')),
            routingImage: formData.routingImage,
			routingImageExtend:formData.routingImageExtend
        };
		console.log(formData.name, "name")
		this._recipeService.setNewRecipe(newRecipe).subscribe({
			next: (res) => { 
				Swal.fire(
					'המתכון נוסף בהצלחה ',
					'♥️ תודה ששתפת',
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

}
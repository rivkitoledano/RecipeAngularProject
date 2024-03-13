import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { recipeRoutingModule } from './recipe-routing.module';
import { SmallRecipeComponent } from './components/small-recipe/small-recipe.component';
import { AllRecipesComponent } from './components/all-recipes/all-recipes.component';
import { EditRecipeComponent } from './components/edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { DifficultyLevelPipe } from "../difficulty-level.pipe";
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '../footer/footer.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import  {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DisplayTimePipe } from '../display-time.pipe';
import { MenuModule } from 'primeng/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
    declarations: [AllRecipesComponent, SmallRecipeComponent, EditRecipeComponent, AddRecipeComponent, RecipeDetailsComponent,DisplayTimePipe],
    imports: [
        CommonModule, MatButtonModule, MatCardModule, recipeRoutingModule, NavBarComponent,NgbPaginationModule, NgbAlertModule,
        DifficultyLevelPipe, NgbCarouselModule,FooterComponent,NgbRatingModule,MatIconModule,MatSidenavModule,MatSliderModule,
        FormsModule,ReactiveFormsModule,MatCheckboxModule,MenuModule,SidebarModule
    ]
})
export class RecipeModule { }

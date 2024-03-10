import { ActivatedRoute,Routes } from '@angular/router';
import { IdentificationModule } from './identification/identification.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomePageComponent } from './home-page/home-page.component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'identification', loadChildren: () => import('./identification/identification.module').then(c => c.IdentificationModule) },
    {path:'home',component:HomePageComponent},
    { path: 'recipe', loadChildren: () => import('./recipe/recipe.module').then(r => r.RecipeModule) },
    { path: '**', component:NotFoundComponent },

];

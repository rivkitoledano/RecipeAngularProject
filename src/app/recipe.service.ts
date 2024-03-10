import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../entities/recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}
  
  getRecipeList(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('https://localhost:7265/api/Recipe')}

  getRecipeById(id:number): Observable<Recipe> {
    return this.http.get<Recipe>(`https://localhost:7265/api/Recipe/${id}`)}

  setNewRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>('https://localhost:7265/api/Recipe', recipe);}
  updateRecipe(recipe:Recipe,id:number): Observable<Recipe> {
    return this.http.put(`https://localhost:7265/api/Recipe/${id}`,recipe)}
  deleteRecipe(id:number): Observable<void> {
    return this.http.delete<void>(`https://localhost:7265/api/User/${id}`);}
}
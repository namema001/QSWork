import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://bing.com/th?id=OSK.ef80e15aea954d148d8ab991ab191d28'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://bing.com/th?id=OSK.ef80e15aea954d148d8ab991ab191d28'),

    new Recipe('A Test Recipe', 'This is simply a test', 'https://bing.com/th?id=OSK.ef80e15aea954d148d8ab991ab191d28'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://bing.com/th?id=OSK.ef80e15aea954d148d8ab991ab191d28')
  ];
}

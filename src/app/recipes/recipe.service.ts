import { EventEmitter, Injectable } from '@angular/core';
import Ingredient from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import Recipe from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Schnitzel',
      'A super tasty Schnitzel - just awesome!',
      'https://assets.bonappetit.com/photos/57ad5452f1c801a1038bcb97/master/pass/perfect-porterhouse-steak.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'A Big Fat Burger',
      'What else do you need to say?',
      'https://assets.bonappetit.com/photos/57ad5452f1c801a1038bcb97/master/pass/perfect-porterhouse-steak.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return [...this.recipes];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
}

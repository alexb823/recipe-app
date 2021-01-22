import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/57ad5452f1c801a1038bcb97/master/pass/perfect-porterhouse-steak.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://assets.bonappetit.com/photos/57ad5452f1c801a1038bcb97/master/pass/perfect-porterhouse-steak.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

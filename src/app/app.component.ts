import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  display = 'recipes';

  onNavSelectionMade(selection: string) {
    this.display = selection;
  }
}

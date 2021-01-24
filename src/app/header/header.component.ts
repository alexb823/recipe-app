import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collapsed = true;

  constructor() {}

  @Output() navSelectionEmitter = new EventEmitter<string>();

  onMakeNaveSelection(selection: string) {
    this.navSelectionEmitter.emit(selection);
  }

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { MatRadioButton } from '@angular/material/radio';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})


export class NavComponent implements OnInit {

  appTitle: string = 'Paterson Inventory';

  constructor() { }

  ngOnInit(): void {
  }
  // language_pack: string;
  // favoriteSeason: string;
  // seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}

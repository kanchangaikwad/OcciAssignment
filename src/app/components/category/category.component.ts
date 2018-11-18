import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Category } from 'src/app/models/enum';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Output() searchCategory = new EventEmitter<string>();

  categories = [];
  constructor() { }

  ngOnInit() {
    const values = Object.keys(Category).map(function(e) {
    return Category[e];
    });
    this.categories = values;
  }

  CallSearchByCategory(catName: string) {
    this.searchCategory.emit(catName);

  }

}

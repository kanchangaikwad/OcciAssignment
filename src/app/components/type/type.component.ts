import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Type } from 'src/app/models/enum';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  @Output() searchType = new EventEmitter<string>();
  types = [];
  constructor() { }

  ngOnInit() {
    const values = Object.keys(Type).map(function(e) {
      return Type[e];
      });
      this.types = values;
  }

  CallSearchByType(type: string) {
    this.searchType.emit(type);

  }

}

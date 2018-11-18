import { Component, OnInit, TemplateRef, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { IMovie } from '../models/movie';


@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {

  @Input() TrailerMovie: IMovie;
  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

}

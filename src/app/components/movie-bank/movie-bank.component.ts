import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { IMovie } from 'src/app/models/movie';

@Component({
  selector: 'app-movie-bank',
  templateUrl: './movie-bank.component.html',
  styleUrls: ['./movie-bank.component.css']
})
export class MovieBankComponent implements OnInit {
  @Input() movies: IMovie[];

  TrailerMovie: IMovie;

  constructor() {

  }

  ngOnInit() {
  }

  ShowTrailer(trailermovie: IMovie) {
    this.TrailerMovie = trailermovie;
  }



}

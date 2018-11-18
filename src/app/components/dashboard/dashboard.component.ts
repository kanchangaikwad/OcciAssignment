import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { IMovie } from 'src/app/models/movie';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  moveiList: IMovie[];
  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.dataService.getMovies()
      .subscribe(data => {
        this.moveiList = data;
      }
    );

  }

  searchMovieByTitle(searchValue: string) {
    if (searchValue !== '') {
      this.dataService.getMoviesByTitle(searchValue)
        .subscribe(data => this.moveiList = data);
    } else {
      this.getMovies();
    }
  }


  searchMovieByCategory(searchValue: string) {

    if (searchValue !== '') {
      this.dataService.getMoviesByCategory(searchValue)
        .subscribe(data => this.moveiList = data);
    } else {
      this.getMovies();
    }
  }

  searchMovieByType(searchValue: string) {
      if (searchValue !== '') {
      this.dataService.getMoviesByType(searchValue)
        .subscribe(data => this.moveiList = data);
    } else {
      this.getMovies();
    }
  }

}

import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule, MatButtonModule, MatIconModule , MatFormFieldModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MovieBankComponent } from './components/movie-bank/movie-bank.component';
import { MovieComponent } from './components/movie/movie.component';


import { CategoryComponent } from './components/category/category.component';
import { TypeComponent } from './components/type/type.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MovieBankComponent,
    MovieComponent,
    CategoryComponent,
    TypeComponent,
    MoviedetailsComponent,
    PaginationComponent,
    IntroductionComponent,
    NavMenuComponent
  ],
  imports: [ CommonModule, NgtUniversalModule, HttpClientModule,
              FormsModule, ModalModule.forRoot(), NgxPaginationModule,
              AppRoutingModule, MatIconModule, MatFormFieldModule
            ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents :  [MoviedetailsComponent]
})
export class AppModule { }

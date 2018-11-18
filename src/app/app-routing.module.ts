import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';


const routes: Routes = [
    // { path: '', '/dashboard', pathMatch: 'full' },
  // // { path: 'introduction', component : IntroductionComponent},
  // { path: 'dashboard', component : DashboardComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

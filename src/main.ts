import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { HouseListComponent } from './app/components/house-list/house-list.component';
import { HouseDetailComponent } from './app/components/house-detail/house-detail.component';
import { HeaderComponent } from './app/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `
})
export class App {
  name = 'Rental Houses';
}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      { path: '', component: HouseListComponent },
      { path: 'house/:id', component: HouseDetailComponent }
    ])
  ]
});
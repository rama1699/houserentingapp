import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { House } from '../../interfaces/house.interface';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-house-list',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchBarComponent],
  template: `
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-6">Houses for Rent</h1>
      <app-search-bar (search)="onSearch($event)"></app-search-bar>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let house of filteredHouses" 
             class="border rounded-lg shadow-lg overflow-hidden cursor-pointer"
             [routerLink]="['/house', house.id]">
          <img [src]="house.imageUrl" [alt]="house.name" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{house.name}}</h2>
            <p class="text-gray-600">{{house.city}}, {{house.state}}</p>
            <p class="text-xl font-bold mt-2">\${{house.price}}/month</p>
            <div class="mt-2 text-gray-600">
              <span>{{house.bedrooms}} beds</span> • 
              <span>{{house.bathrooms}} baths</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class HouseListComponent {
  houses: House[] = [];
  filteredHouses: House[] = [];

  constructor(private houseService: HouseService) {
    this.houses = this.houseService.getHouses();
    this.filteredHouses = this.houses;
  }

  onSearch(searchTerm: string) {
    if (!searchTerm) {
      this.filteredHouses = this.houses;
      return;
    }

    searchTerm = searchTerm.toLowerCase();
    this.filteredHouses = this.houses.filter(house => 
      house.name.toLowerCase().includes(searchTerm) ||
      house.address.toLowerCase().includes(searchTerm) ||
      house.city.toLowerCase().includes(searchTerm)
    );
  }
}
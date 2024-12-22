import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HouseService } from '../../services/house.service';
import { House } from '../../interfaces/house.interface';

@Component({
  selector: 'app-house-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container mx-auto p-4" *ngIf="house">
      <button [routerLink]="['']" class="mb-4 text-blue-600">&larr; Back to listings</button>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img [src]="house.imageUrl" [alt]="house.name" class="w-full h-96 object-cover">
        <div class="p-6">
          <h1 class="text-3xl font-bold mb-4">{{house.name}}</h1>
          <p class="text-gray-600 mb-4">{{house.address}}, {{house.city}}, {{house.state}}</p>
          <p class="text-2xl font-bold text-blue-600 mb-4">\${{house.price}}/month</p>
          
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="border rounded-lg p-4">
              <h3 class="font-semibold">Bedrooms</h3>
              <p>{{house.bedrooms}}</p>
            </div>
            <div class="border rounded-lg p-4">
              <h3 class="font-semibold">Bathrooms</h3>
              <p>{{house.bathrooms}}</p>
            </div>
          </div>
          
          <h2 class="text-xl font-semibold mb-2">Description</h2>
          <p class="text-gray-700">{{house.description}}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HouseDetailComponent {
  house: House | undefined;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.house = this.houseService.getHouse(id);
  }
}
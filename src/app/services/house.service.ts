import { Injectable } from '@angular/core';
import { House } from '../interfaces/house.interface';

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private houses: House[] = [
    {
      id: 1,
      name: 'Modern Downtown Apartment',
      address: '123 Main St',
      city: 'Chicago',
      state: 'IL',
      price: 2500,
      bedrooms: 2,
      bathrooms: 2,
      imageUrl: 'https://picsum.photos/800/600?random=1',
      description: 'Beautiful modern apartment in the heart of downtown'
    },
    {
      id: 2,
      name: 'Suburban Family Home',
      address: '456 Oak Ave',
      city: 'Chicago',
      state: 'IL',
      price: 3200,
      bedrooms: 3,
      bathrooms: 2.5,
      imageUrl: 'https://picsum.photos/800/600?random=2',
      description: 'Spacious family home with a large backyard'
    },
    {
      id: 3,
      name: 'Luxury Penthouse',
      address: '789 Lake Shore Dr',
      city: 'Chicago',
      state: 'IL',
      price: 5500,
      bedrooms: 3,
      bathrooms: 3,
      imageUrl: 'https://picsum.photos/800/600?random=3',
      description: 'Stunning penthouse with panoramic lake views'
    },
    {
      id: 4,
      name: 'Cozy Studio',
      address: '321 Pine St',
      city: 'Chicago',
      state: 'IL',
      price: 1800,
      bedrooms: 1,
      bathrooms: 1,
      imageUrl: 'https://picsum.photos/800/600?random=4',
      description: 'Perfect starter apartment in a quiet neighborhood'
    },
    {
      id: 5,
      name: 'Historic Brownstone',
      address: '567 Elm St',
      city: 'Chicago',
      state: 'IL',
      price: 4200,
      bedrooms: 4,
      bathrooms: 2.5,
      imageUrl: 'https://picsum.photos/800/600?random=5',
      description: 'Beautifully restored historic brownstone with original features'
    },
    {
      id: 6,
      name: 'River North Loft',
      address: '890 Wells St',
      city: 'Chicago',
      state: 'IL',
      price: 3800,
      bedrooms: 2,
      bathrooms: 2,
      imageUrl: 'https://picsum.photos/800/600?random=6',
      description: 'Industrial-chic loft with high ceilings and exposed brick'
    },
    {
      id: 7,
      name: 'Garden Unit',
      address: '432 Maple Ave',
      city: 'Chicago',
      state: 'IL',
      price: 1500,
      bedrooms: 1,
      bathrooms: 1,
      imageUrl: 'https://picsum.photos/800/600?random=7',
      description: 'Charming garden apartment with private patio'
    },
    {
      id: 8,
      name: 'Wicker Park Duplex',
      address: '765 Division St',
      city: 'Chicago',
      state: 'IL',
      price: 2900,
      bedrooms: 3,
      bathrooms: 1.5,
      imageUrl: 'https://picsum.photos/800/600?random=8',
      description: 'Trendy duplex in the heart of Wicker Park'
    },
    {
      id: 9,
      name: 'Lincoln Park Condo',
      address: '234 Clark St',
      city: 'Chicago',
      state: 'IL',
      price: 3500,
      bedrooms: 2,
      bathrooms: 2,
      imageUrl: 'https://picsum.photos/800/600?random=9',
      description: 'Modern condo steps away from Lincoln Park Zoo'
    },
    {
      id: 10,
      name: 'South Loop Townhouse',
      address: '543 State St',
      city: 'Chicago',
      state: 'IL',
      price: 4500,
      bedrooms: 4,
      bathrooms: 3.5,
      imageUrl: 'https://picsum.photos/800/600?random=10',
      description: 'Luxurious townhouse with rooftop deck and city views'
    }
  ];

  getHouses(): House[] {
    return this.houses;
  }

  getHouse(id: number): House | undefined {
    return this.houses.find(house => house.id === id);
  }
}
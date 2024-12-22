import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template: `
    <header class="bg-blue-600 text-white p-4">
      <div class="container mx-auto">
        <a [routerLink]="['']" class="text-2xl font-bold">🏠 Homes</a>
      </div>
    </header>
  `
})
export class HeaderComponent {}
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="max-w-xl mx-auto mb-8">
      <input
        type="text"
        [(ngModel)]="searchTerm"
        (ngModelChange)="onSearch()"
        placeholder="Search by address, city, or name..."
        class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
    </div>
  `
})
export class SearchBarComponent {
  searchTerm = '';
  @Output() search = new EventEmitter<string>();

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  showDropdown = false;

  onMouseEnter() {
    this.showDropdown = true;
  }

  onMouseLeave() {
    this.showDropdown = false;
  }

  toggleMenu() {
    // Logic to toggle the menu or display options
    console.log('Menu toggled');
  }
}

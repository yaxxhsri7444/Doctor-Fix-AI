import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
    menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

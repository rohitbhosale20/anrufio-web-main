import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isMenuOpen = false;
  isHireOpen = false;
  isExtertiseOpen = false;
  isServiceOpen = false;
  isCompanyOpen = false;
  isworkOpen = false;
  isLearnOpen = false;

  closeDropdownTimeout: any;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeAllDropdownsImmediate() {
    this.isHireOpen = false;
    this.isExtertiseOpen = false;
    this.isServiceOpen = false;
    this.isCompanyOpen = false;
    this.isworkOpen = false;
    this.isLearnOpen = false;
  }

  closeDropdown() {
    this.closeDropdownTimeout = setTimeout(() => {
      this.closeAllDropdownsImmediate();
    }, 100);
  }
  openServices() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isServiceOpen = true;
  }
  openLearn() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isLearnOpen = true;
  }
  openWork() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isworkOpen = true;
  }
  openCompany() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isCompanyOpen = true;
  }
  openExtertise() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isExtertiseOpen = true;
  }
  openHire() {
    clearTimeout(this.closeDropdownTimeout);
    this.closeAllDropdownsImmediate();
    this.isHireOpen = true;
  }
}

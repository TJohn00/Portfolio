import { Component } from '@angular/core';
import { resumeData } from '../../mock-data/resume-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  name = resumeData.name;
  email = resumeData.email;
  phone = resumeData.phone;

  // Add a property to manage the navigation dropdown
  isDropdownOpen = false;

  // Function to toggle the dropdown
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}

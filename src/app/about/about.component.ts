import { Component } from '@angular/core';
import { resumeData } from '../../mock-data/resume-data'; // Import resume data

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = resumeData.name;
  aboutMe = resumeData.aboutMe;
}

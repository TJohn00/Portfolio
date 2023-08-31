import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProjects } from '../store/actions/portfolio.actions';
import { selectProjects } from '../store/selectors/portfolio.selectors';
import { resumeData } from '../../mock-data/resume-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects$ = this.store.select(selectProjects);
  name = resumeData.name;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadProjects());
  }
}

import { Injectable } from '@angular/core';
import { projects } from '../../mock-data/projects';
import { Project } from '../models/project.model';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
    getProjects(): Observable<Project[]> {
        return from(Promise.resolve(projects));
      }
}

import { createReducer, on } from '@ngrx/store';
import { loadProjectsSuccess } from '../actions/portfolio.actions';
import { Project } from '../../models/project.model';

export interface PortfolioState {
  projects: Project[];
}

export const initialState: PortfolioState = {
  projects: []
};

export const portfolioReducer = createReducer(
  initialState,
  on(loadProjectsSuccess, (state, { projects }) => ({ ...state, projects }))
);

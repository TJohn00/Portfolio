import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PortfolioState } from '../reducers/portfolio.reducer';

export const selectPortfolioState = createFeatureSelector<PortfolioState>('portfolio');

export const selectProjects = createSelector(
  selectPortfolioState,
  state => state.projects
);

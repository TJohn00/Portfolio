import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PortfolioService } from '../../services/portfolio.service'; // Create this service to fetch data

@Injectable()
export class PortfolioEffects {
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Portfolio] Load Projects'),
      mergeMap(() =>
        this.portfolioService.getProjects().pipe(
          map(projects => ({ type: '[Portfolio] Load Projects Success', projects })),
          catchError(error => of({ type: '[Portfolio] Load Projects Failure', error }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private portfolioService: PortfolioService
  ) {}
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { portfolioReducer } from './store/reducers/portfolio.reducer';
import { PortfolioEffects } from './store/effects/portfolio.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      portfolio: portfolioReducer
    }),
    EffectsModule.forRoot([PortfolioEffects, ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

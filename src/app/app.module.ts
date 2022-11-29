import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BtnWhiteComponent } from './shared/btn-white/btn-white.component';
import { BtnColorComponent } from './shared/btn-color/btn-color.component';
import { CasinoComponent } from './shared/casino/casino.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BtnWhiteComponent,
    BtnColorComponent,
    CasinoComponent,
    HeroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

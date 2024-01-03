import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroComponent } from './heroes/components/hero/hero.component';
import { ListComponent } from './heroes/components/list/list.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [AppComponent, ListComponent, HeroComponent],
  imports: [BrowserModule, AppRoutingModule, CounterModule],
  providers: [],
  bootstrap: [AppComponent, HeroesModule],
})
export class AppModule {}

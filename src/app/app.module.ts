import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RotaParametrizadaComponent } from './pages/rota-parametrizada/rota-parametrizada.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreComponent,
    PageErrorComponent,
    MenuComponent,
    RotaParametrizadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

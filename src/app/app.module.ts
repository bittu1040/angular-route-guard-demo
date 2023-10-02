import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DataService } from './services/data.service';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  declarations: [AppComponent, HeaderComponent, HomeComponent, ProductsComponent],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}

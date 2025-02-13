import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule, CommonModule, HomeComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule {}

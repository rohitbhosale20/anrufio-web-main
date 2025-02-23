import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog/blog.component';
import { CaseStudyComponent } from './blog/case-study/case-study.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    BlogComponent,
    CaseStudyComponent
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

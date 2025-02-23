import { CommonModule } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
} from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    HttpClientModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  categories: string[] = [];
  selectedCategory: string = '';
  data: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/json/technologies.json').subscribe((data: any) => {
      this.data = data;
      this.categories = Object.keys(data);
      this.selectedCategory = this.categories[0];
    });
  }

  ngAfterViewInit() {
    const video = document.querySelector('video') as HTMLVideoElement;
    if (video) {
      video.muted = true;
      video.play().catch((error) => console.error('Autoplay failed:', error));
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}

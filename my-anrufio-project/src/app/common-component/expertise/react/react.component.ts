import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FAQSection } from '../../faq/faq.models';
import { FooterComponent } from '../../../footer/footer.component';
import { HeaderComponent } from '../../../header/header.component';
import { BenefitsComponent } from '../../benefits/benefits.component';
import { BookCallComponent } from '../../book-call/book-call.component';
import { FaqComponent } from '../../faq/faq.component';
import { RecentBlogComponent } from '../../recent-blog/recent-blog.component';
import { TestimonialComponent } from '../../testimonial/testimonial.component';

@Component({
  selector: 'app-react',
  imports: [ HeaderComponent, FooterComponent, TestimonialComponent, BenefitsComponent, BenefitsComponent, FaqComponent, BookCallComponent, BookCallComponent, RecentBlogComponent],
  templateUrl: './react.component.html',
  styleUrl: './react.component.css'
})
export class ReactComponent {
 faqData!: FAQSection;
  benefitsData: any;
  bookCall: any;
  blogPosts:any
  expertise:any
  pwaService:any
  deploymentDatas:any
    constructor(private http: HttpClient) {}
    coredata:any
  ngOnInit(): void {
    this.http.get<any>('assets/json/react.json').subscribe(
      (response) => {
        this.coredata = response.coreCompetencies;
      },
      (error) => {
        console.error("Error loading JSON:", error);
      }
    );
    this.http.get('assets/json/react.json').subscribe({
      next: (data: any) => {
        this.bookCall = data.projects;  // Fix the typo
      },
      error: (error) => {
        console.error('Error loading projects data:', error);
      },
    });
    
    this.http.get('assets/json/blog-expertise.json').subscribe({
      next: (data) => {
        this.blogPosts = data;
      },
      error: (error) => {
        console.error('Error loading benefits data:', error);
      },
    });


    this.http.get<FAQSection>('assets/json/product-engeering.json').subscribe({
      next: (data) => {
        this.faqData = data;
      },
      error: (error) => {
        console.error('Error loading FAQ data:', error);
      },
    });
    this.http.get('assets/json/benefit-react.json').subscribe({
      next: (data) => {
        this.benefitsData = data;
      },
      error: (error) => {
        console.error('Error loading benefits data:', error);
      },
    });
    this.http.get('assets/json/react.json').subscribe((response) => {
      this.expertise = response;
    });
    this.http.get<any>('assets/json/react.json').subscribe((response) => {
      this.pwaService = response.pwaServices; // Assign the entire pwaServices object
    });
    this.http.get<any>('assets/json/react.json').subscribe((response) => {
      this.deploymentDatas = response.deployment;
    });
  }
  
  
  handleFaqClick(faq: any): void {
    console.log('FAQ clicked:', faq);
  }
}
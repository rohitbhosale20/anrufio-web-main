import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FAQSection } from '../../common-component/faq/faq.models';
import { BookCallComponent } from '../../common-component/book-call/book-call.component';
import { ExpertiseTechnologiesComponent } from '../../common-component/expertise-technologies/expertise-technologies.component';
import { FaqComponent } from '../../common-component/faq/faq.component';
import { FullStackDevelopmentComponent } from '../../common-component/full-stack-development/full-stack-development.component';
import { QualityDrivenProficiencyComponent } from '../../common-component/quality-driven-proficiency/quality-driven-proficiency.component';
import { RecentBlogComponent } from '../../common-component/recent-blog/recent-blog.component';
import { ServiceForExpertiseComponent } from '../../common-component/service-for-expertise/service-for-expertise.component';
import { TestimonialComponent } from '../../common-component/testimonial/testimonial.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-firebase',
  imports: [ExpertiseTechnologiesComponent, HeaderComponent, FooterComponent, ServiceForExpertiseComponent, FullStackDevelopmentComponent, QualityDrivenProficiencyComponent, TestimonialComponent, FaqComponent, BookCallComponent, BookCallComponent, RecentBlogComponent],
  templateUrl: './firebase.component.html',
  styleUrl: './firebase.component.css'
})
export class FirebaseComponent {
faqData!: FAQSection;
  benefitsData: any;
  showButton!:boolean
  bookCall: any;
  blogPosts:any
  pwaService:any
  deploymentDatas:any
  coreCompetencies: any;
    constructor(private http: HttpClient) {}
    expertise:any
  ngOnInit(): void {
    this.http.get('assets/json/firebase.json').subscribe({
      next: (data: any) => {
        this.bookCall = data.projects;  // Fix the typo
      },
      error: (error: any) => {
        console.error('Error loading projects data:', error);
      },
    });
    
    this.http.get('assets/json/blog-expertise.json').subscribe({
      next: (data: any) => {
        this.blogPosts = data;
      },
      error: (error: any) => {
        console.error('Error loading benefits data:', error);
      },
    });


    this.http.get<FAQSection>('assets/json/product-engeering.json').subscribe({
      next: (data: any) => {
        this.faqData = data;
      },
      error: (error: any) => {
        console.error('Error loading FAQ data:', error);
      },
    });
    this.http.get('assets/json/firebase.json').subscribe({
      next: (data: any) => {
        this.benefitsData = data;
      },
      error: (error: any) => {
        console.error('Error loading benefits data:', error);
      },
    });

    this.http.get('assets/json/firebase.json').subscribe((response: any) => {
      this.expertise = response;
    });

    this.http.get<any>('assets/json/firebase.json').subscribe((response: { pwaServices: any; }) => {
      this.pwaService = response.pwaServices; // Assign the entire pwaServices object
    });
    this.http.get<any>('assets/json/firebase.json').subscribe((response: { deployment: any; }) => {
      this.deploymentDatas = response.deployment;
    });
    this.http.get<any>('assets/json/firebase.json').subscribe(
      (response: { coreCompetencies: any; }) => {
        this.coreCompetencies = response.coreCompetencies;
      },
      (error: any) => {
        console.error("Error loading JSON:", error);
      }
    );
  }
  
  handleFaqClick(faq: any): void {
    console.log('FAQ clicked:', faq);
  }

}

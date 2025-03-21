import { Component } from '@angular/core';
import { BlogComponent } from '../../blog/blog/blog.component';
import { BenefitsComponent } from '../../common-component/benefits/benefits.component';
import { BookCallComponent } from '../../common-component/book-call/book-call.component';
import { ExpertiseTechnologiesComponent } from '../../common-component/expertise-technologies/expertise-technologies.component';
import { FaqComponent } from '../../common-component/faq/faq.component';
import { FullStackDevelopmentComponent } from '../../common-component/full-stack-development/full-stack-development.component';
import { OurAiDevelopmentProcessComponent } from '../../common-component/our-ai-development-process/our-ai-development-process.component';
import { QualityDrivenProficiencyComponent } from '../../common-component/quality-driven-proficiency/quality-driven-proficiency.component';
import { RecentBlogComponent } from '../../common-component/recent-blog/recent-blog.component';
import { ServiceForExpertiseComponent } from '../../common-component/service-for-expertise/service-for-expertise.component';
import { TechnologiesComponent } from '../../common-component/technologies/technologies.component';
import { TestimonialComponent } from '../../common-component/testimonial/testimonial.component';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { HttpClient } from '@angular/common/http';
import { FAQSection } from '../../common-component/faq/faq.models';

@Component({
  selector: 'app-react',
  imports: [ExpertiseTechnologiesComponent, HeaderComponent, FooterComponent, ServiceForExpertiseComponent, FullStackDevelopmentComponent, QualityDrivenProficiencyComponent, TechnologiesComponent, TestimonialComponent, BenefitsComponent, BenefitsComponent, FaqComponent, BookCallComponent, BookCallComponent, BlogComponent, RecentBlogComponent, OurAiDevelopmentProcessComponent],
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

    this.http.get('assets/json/book-call-expertise.json').subscribe({
      next: (data) => {
        this.bookCall = data;
      },
      error: (error) => {
        console.error('Error loading benefits data:', error);
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



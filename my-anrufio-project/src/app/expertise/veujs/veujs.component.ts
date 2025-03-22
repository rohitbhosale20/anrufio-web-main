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
import { FAQSection } from '../../common-component/faq/faq.models';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-veujs',
  imports: [ExpertiseTechnologiesComponent, HeaderComponent, FooterComponent, ServiceForExpertiseComponent, FullStackDevelopmentComponent, QualityDrivenProficiencyComponent, TestimonialComponent, BenefitsComponent, BenefitsComponent, FaqComponent, BookCallComponent, BookCallComponent, RecentBlogComponent, ],
  templateUrl: './veujs.component.html',
  styleUrl: './veujs.component.css'
})
export class VeujsComponent {
  faqData!: FAQSection;
  benefitsData: any;
  bookCall: any;
  blogPosts:any
  pwaService:any
  deploymentDatas:any
  coreCompetencies: any;
    constructor(private http: HttpClient) {}
    expertise:any
  ngOnInit(): void {
    this.http.get('assets/json/veujs.json').subscribe({
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
    this.http.get('assets/json/veujs.json').subscribe({
      next: (data: any) => {
        this.benefitsData = data;
      },
      error: (error: any) => {
        console.error('Error loading benefits data:', error);
      },
    });

    this.http.get('assets/json/veujs.json').subscribe((response: any) => {
      this.expertise = response;
    });

    this.http.get<any>('assets/json/veujs.json').subscribe((response: { pwaServices: any; }) => {
      this.pwaService = response.pwaServices; // Assign the entire pwaServices object
    });
    this.http.get<any>('assets/json/veujs.json').subscribe((response: { deployment: any; }) => {
      this.deploymentDatas = response.deployment;
    });
    this.http.get<any>('assets/json/veujs.json').subscribe(
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


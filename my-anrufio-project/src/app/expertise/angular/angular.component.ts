import { Component } from '@angular/core';
import { ExpertiseTechnologiesComponent } from "../../common-component/expertise-technologies/expertise-technologies.component";
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ServiceForExpertiseComponent } from "../../common-component/service-for-expertise/service-for-expertise.component";
import { FullStackDevelopmentComponent } from "../../common-component/full-stack-development/full-stack-development.component";
import { QualityDrivenProficiencyComponent } from "../../common-component/quality-driven-proficiency/quality-driven-proficiency.component";
import { TechnologiesComponent } from "../../common-component/technologies/technologies.component";
import { TestimonialComponent } from "../../common-component/testimonial/testimonial.component";
import { BenefitsComponent } from "../../common-component/benefits/benefits.component";
import { FaqComponent } from "../../common-component/faq/faq.component";
import { BookCallComponent } from "../../common-component/book-call/book-call.component";
import { BlogComponent } from "../../blog/blog/blog.component";
import { RecentBlogComponent } from "../../common-component/recent-blog/recent-blog.component";
import { FAQSection } from '../../common-component/faq/faq.models';
import { HttpClient } from '@angular/common/http';
import { OurAiDevelopmentProcessComponent } from "../../common-component/our-ai-development-process/our-ai-development-process.component";

@Component({
  selector: 'app-angular',
  imports: [ExpertiseTechnologiesComponent, HeaderComponent, FooterComponent, ServiceForExpertiseComponent, FullStackDevelopmentComponent, QualityDrivenProficiencyComponent, TechnologiesComponent, TestimonialComponent, BenefitsComponent, BenefitsComponent, FaqComponent, BookCallComponent, BookCallComponent, BlogComponent, RecentBlogComponent, OurAiDevelopmentProcessComponent],
  templateUrl: './angular.component.html',
  styleUrl: './angular.component.css'
})
export class AngularComponent {
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
    this.http.get('assets/json/benefit-angular.json').subscribe({
      next: (data) => {
        this.benefitsData = data;
      },
      error: (error) => {
        console.error('Error loading benefits data:', error);
      },
    });

    this.http.get('assets/json/angular.json').subscribe((response) => {
      this.expertise = response;
    });

    this.http.get<any>('assets/json/angular.json').subscribe((response) => {
      this.pwaService = response.pwaServices; // Assign the entire pwaServices object
    });
    this.http.get<any>('assets/json/angular.json').subscribe((response) => {
      this.deploymentDatas = response.deployment;
    });
    this.http.get<any>('assets/json/angular.json').subscribe(
      (response) => {
        this.coreCompetencies = response.coreCompetencies;
      },
      (error) => {
        console.error("Error loading JSON:", error);
      }
    );
  }
  
  handleFaqClick(faq: any): void {
    console.log('FAQ clicked:', faq);
  }
}

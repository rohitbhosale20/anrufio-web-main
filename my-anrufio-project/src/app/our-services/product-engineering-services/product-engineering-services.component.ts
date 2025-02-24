import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';
import { HeaderComponent } from '../../header/header.component';
import { BenefitsComponent } from '../../common-component/benefits/benefits.component';
import { IndustriesComponent } from '../../common-component/industries/industries.component';
import { EverythingYouNeedComponent } from '../../common-component/everything-you-need/everything-you-need.component';
import { TechnologiesComponent } from '../../common-component/technologies/technologies.component';
import { TestimonialComponent } from '../../common-component/testimonial/testimonial.component';
import { OurCollaborationComponent } from '../../common-component/our-collaboration/our-collaboration.component';
import { BookCallComponent } from '../../common-component/book-call/book-call.component';
import { FaqComponent } from '../../common-component/faq/faq.component';

@Component({
  selector: 'app-product-engineering-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FooterComponent,
    HeaderComponent,
    BenefitsComponent,
    IndustriesComponent,
    EverythingYouNeedComponent,
    TechnologiesComponent,
    TestimonialComponent,
    OurCollaborationComponent,
    BookCallComponent,
    FaqComponent,
  ],

  templateUrl: './product-engineering-services.component.html',
  styleUrl: './product-engineering-services.component.css',
})
export class ProductEngineeringServicesComponent {}

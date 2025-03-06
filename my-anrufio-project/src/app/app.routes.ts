import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog/blog.component';
import { CaseStudyComponent } from './blog/case-study/case-study.component';
import { ProductEngineeringServicesComponent } from './our-services/product-engineering-services/product-engineering-services.component';
import { GenerativeAiDevelopmentComponent } from './our-services/generative-ai-development/generative-ai-development.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'case-study', component: CaseStudyComponent },
  {
    path: 'product-engineering-services',
    component: ProductEngineeringServicesComponent,
  },
  {
    path: 'generative-ai-development-company',
    component: GenerativeAiDevelopmentComponent,
  },
];

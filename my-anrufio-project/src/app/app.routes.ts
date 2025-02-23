import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog/blog.component';
import { CaseStudyComponent } from './blog/case-study/case-study.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'case-study', component: CaseStudyComponent },
];

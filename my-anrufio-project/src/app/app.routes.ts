import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog/blog.component';
import { CaseStudyComponent } from './blog/case-study/case-study.component';
import { ProductEngineeringServicesComponent } from './our-services/product-engineering-services/product-engineering-services.component';
import { GenerativeAiDevelopmentComponent } from './our-services/generative-ai-development/generative-ai-development.component';
import { HireOffshoreFullStackDevelopersComponent } from './our-services/hire-offshore-full-stack-developers/hire-offshore-full-stack-developers.component';
import { RemoteContactUsFormComponent } from './common-component/remote-contact-us-form/remote-contact-us-form.component';
import { ContactUsComponent } from './common-component/contact-us/contact-us.component';
import { AngularComponent } from './expertise/angular/angular.component';
import { ReactComponent } from './expertise/react/react.component';
import { VeujsComponent } from './expertise/veujs/veujs.component';
import { NodejsComponent } from './expertise/nodejs/nodejs.component';
import { PWAComponent } from './expertise/pwa/pwa.component';
import { FlutterComponent } from './expertise/flutter/flutter.component';
import { PythonComponent } from './expertise/python/python.component';
import { JavaComponent } from './expertise/java/java.component';
import { firstValueFrom } from 'rxjs';
import { FirebaseComponent } from './expertise/firebase/firebase.component';
import { SeverlessComponent } from './expertise/severless/severless.component';
import { ReactNativeComponent } from './expertise/react-native/react-native.component';
import { NextjsComponent } from './expertise/nextjs/nextjs.component';

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
  {
    path: 'hire-offshore-full-stack-developers',
    component: HireOffshoreFullStackDevelopersComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },
  {
    path: 'angular',
    component: AngularComponent,
  },
  {
    path: 'react',
    component: ReactComponent,
  },{
    path: 'Veujs',
    component: VeujsComponent,
  },{
    path: 'Nodejs',
    component: NodejsComponent,
  },{
    path: 'PWA',
    component: PWAComponent,
  },{
    path: 'Python',
    component: PythonComponent,
  }
  ,{
    path: 'Java',
    component: JavaComponent,
  },{
    path: 'Firebase',
    component: FirebaseComponent,
  },{
    path: 'Serverless',
    component: SeverlessComponent,
  }
  ,{
    path: 'Reactive Native',
    component: ReactNativeComponent,
  },{
    path: 'Nextjs',
    component: NextjsComponent,
  }
];

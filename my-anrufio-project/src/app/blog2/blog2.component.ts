import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-blog2',
  imports: [CommonModule, RouterModule, FooterComponent, HeaderComponent,HttpClientModule],
  templateUrl: './blog2.component.html',
  styleUrl: './blog2.component.css'
})
export class Blog2Component {
  blogSection: any = {};
  programs: any[] = [];
  blogs: any[] = [];
  selectedCategory = "Most Popular";
  filteredPrograms: any = [];

  categories = ["Most Popular", "Generative AI", "AI & Machine Learning", "Agile and Scrum", "Cyber Security", "Project Management", "Data Science & Business Analytics"];

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/json/blog2.json').subscribe({
      next: (data: any) => {
        this.blogSection = data.blog_section;

        if (data.programs && data.programs.length > 0) {
          this.programs = data.programs[0].programs || [];
          this.filterPrograms(this.selectedCategory);
        }

        if (data.blogs && data.blogs.length > 0) {
          this.blogs = data.blogs;
        }
      },
      error: (error) => {
        console.error('Error loading JSON:', error);
      },
    });
  }

  filterPrograms(category: string) {
    this.selectedCategory = category;

    if (!this.programs || this.programs.length === 0) {
      return;
    }

    this.filteredPrograms = this.programs.filter(program =>
      program.category && program.category === category
    );

    if (this.filteredPrograms.length === 0) {
      this.filteredPrograms = this.programs;
    }
  }

  viewProgramDetails(title: string): void {
    const encodedTitle = encodeURIComponent(title);
    this.router.navigate(['/program', encodedTitle]);
  }

  viewBlogDetails(id: string): void {
    this.router.navigate(['/blog', id]);
  }
}

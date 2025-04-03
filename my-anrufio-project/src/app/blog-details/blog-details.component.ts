import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  standalone: true, // ✅ If using standalone components

  imports: [CommonModule, HttpClientModule], // ✅ Add HttpClientModule here
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css'
})
export class BlogDetailsComponent {
  // @Input() program: any;
  program: any = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/json/blog2.json').subscribe((data: any) => {
      const programs = data.programs[0].programs; // Access nested programs array
      const title = decodeURIComponent(this.route.snapshot.paramMap.get('title') || '');
      this.program = programs.find((p: { title: string; }) => p.title === title);
    });
  }
}

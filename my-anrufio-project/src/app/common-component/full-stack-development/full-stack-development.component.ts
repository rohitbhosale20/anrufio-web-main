import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-stack-development',
  imports: [CommonModule],
  templateUrl: './full-stack-development.component.html',
  styleUrl: './full-stack-development.component.css'
})
export class FullStackDevelopmentComponent {
  @Input() deploymentData: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
   
  }
}

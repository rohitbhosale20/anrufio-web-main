import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-for-expertise',
  imports: [CommonModule],
  templateUrl: './service-for-expertise.component.html',
  styleUrl: './service-for-expertise.component.css'
})
export class ServiceForExpertiseComponent {
@Input()  pwaServices: any = {}; // Define pwaServices properly

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }}
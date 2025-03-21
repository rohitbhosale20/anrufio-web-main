import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, input, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrustedByWorldsComponent } from "../trusted-by-worlds/trusted-by-worlds.component";

@Component({
  selector: 'app-expertise-technologies',
  imports: [CommonModule, RouterModule, HttpClientModule, TrustedByWorldsComponent],
  templateUrl: './expertise-technologies.component.html',
  styleUrl: './expertise-technologies.component.css'
})
export class ExpertiseTechnologiesComponent {
 @Input() data: any;


  ngOnInit() {
  
}}

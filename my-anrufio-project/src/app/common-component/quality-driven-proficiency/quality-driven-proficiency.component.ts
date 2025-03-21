import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quality-driven-proficiency',
  imports: [CommonModule],
  templateUrl: './quality-driven-proficiency.component.html',
  styleUrl: './quality-driven-proficiency.component.css'
})
export class QualityDrivenProficiencyComponent {
 @Input() coreCompetencies: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    
  }
}

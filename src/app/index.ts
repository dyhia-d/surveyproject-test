import { Component, OnInit } from '@angular/core';
import { SurveyService } from './survey.service';
import { Survey } from './survey.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [SurveyService]
})
export class AdminComponent implements OnInit {

  constructor(private surveyService: SurveyService) { }
  
  ngOnInit() {
  }

  submitForm(title: string, artist: string, description: string) {
    var newSurvey: Survey = new Survey();
    
    
    this.surveyService.addSurvey(newSurvey);
  }


}
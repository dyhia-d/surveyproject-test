import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Question } from './question.model';
import { Survey } from './survey.model';

@Injectable()
export class QuestionService {

  questions: AngularFireList<any[]>;
  surveys: AngularFireList<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.questions = database.list('surveys/survey');
    this.surveys= database.list('surveys');
   }

   getQuestions() {
    return this.questions;
  }

  /*addQuestions(newQuestions: Question) {
    this.questions.push(newQuestions);
  }*/

  addSurvey(survey: Survey) {
    this.surveys.push(survey);
  }

}

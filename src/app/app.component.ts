import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database"; // FirebaseListObservable deprecated ?

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  items: AngularFireList<any[]>;
  model = {};
  constructor(af: AngularFireDatabase) {
    this.items = af.list('/albums');
  }

  addToList(item: any) {
    this.items.push(item);
  }
};

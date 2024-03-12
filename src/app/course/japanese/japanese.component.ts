import { Component } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-japanese',
  templateUrl: './japanese.component.html',
  styleUrls: ['./japanese.component.css']
})
export class JapaneseComponent {
  constructor(public snackBar: MatSnackBar) {}
  value:boolean=false;
  openSnackBar() {
      this.snackBar.open("Subscription Required","Close")
  }
}

import { Component } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-french',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.css']
})
export class FrenchComponent {
  constructor(public snackBar: MatSnackBar) {}
  value:boolean=false;
  openSnackBar() {
      this.snackBar.open("Subscription Required","Close")
  }
}

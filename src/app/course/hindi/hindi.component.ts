import { Component } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-hindi',
  templateUrl: './hindi.component.html',
  styleUrls: ['./hindi.component.css']
})
export class HindiComponent {
  constructor(public snackBar: MatSnackBar) {}
  value:boolean=false;
  openSnackBar() {
      this.snackBar.open("Subscription Required","Close")
  }
}

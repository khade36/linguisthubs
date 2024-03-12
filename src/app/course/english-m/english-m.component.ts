// import { Component } from '@angular/core';
import { Component, DoCheck } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-english-m',
  templateUrl: './english-m.component.html',
  styleUrls: ['./english-m.component.css']
})
export class EnglishMComponent implements DoCheck{
  constructor(public snackBar: MatSnackBar,public route:Router) {}
  value:boolean=false;
  Buy:String="Buy";
  openSnackBar() {
      this.snackBar.open("Subscription Required","Close")
  }
  route_link(){
    let token=localStorage.getItem('token');
    if(token!=null){
      this.route.navigate(['english-u']);     
    }else{
      this.route.navigate(['login'])
      this.openSnackBar()
    }
  }
  ngDoCheck(): void {
          
    }
}

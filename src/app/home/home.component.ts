import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  constructor(private navigate:Router){}
  tagLine:any="No hidden costs"; 
  getLink(){
    this.navigate.navigate(['contact']);
  }
  }


import { HttpClient } from '@angular/common/http';
import { AfterContentInit, Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {

constructor(private route:Router){}  


login:String="Login";
token:any;
isLoggedOutShow:boolean=false;
isLoggedOut:boolean=false;
  
ngDoCheck(): void {
  this.token=localStorage.getItem('token')
  if(this.token!=null){
  this.login="Logout";
  // localStorage.clear();
  }
}

LogOut(){
  localStorage.removeItem('token');
  localStorage.clear();
  this.login="Login";
  if(localStorage.getItem('token')==null){
  this.isLoggedOutShow=true;
  }
  this.route.navigate(['login']);
}  
}

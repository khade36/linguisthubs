import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
constructor(private http:HttpClient,private sanitizer: DomSanitizer){}

isVisibleDashboard:boolean=true;
isVisiblieCourses:boolean=false;

getArrayOfCourses: any = [];

sanitizeUrl(url: string): SafeResourceUrl {
  return this.sanitizer.bypassSecurityTrustResourceUrl(url);
}

getCourses(){
  this.http.get("http://localhost:8087/api/orders/authorName/Anastasiia").subscribe((result)=>{
    this.isVisiblieCourses=true;
    this.isVisibleDashboard=false;
    this.getArrayOfCourses=[result]
    console.log(this.getArrayOfCourses)
  });
}
getDashBoard(){
  this.isVisibleDashboard=true;
  this.isVisiblieCourses=false;
}
}

import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-russian',
  templateUrl: './russian.component.html',
  styleUrls: ['./russian.component.css']
})
export class RussianComponent implements OnInit{
  constructor(public snackBar: MatSnackBar,private route:Router,private http:HttpClient) {}
  value:boolean=false;
  btn_buy:any="Buy";
  courseUserName:string;
  isSpin=true;
  courseArray:any[]=[];
  MatToolTip:any="Redirecting to the Buying Page";

  openSnackBar() {
      if(this.btn_buy=="Buy"){
        this.snackBar.open("Subscription Required","Close")
      }else{
        this.snackBar.open("Course page","Close")
        this.route.navigate(['./russian-u']);
      }
      
  }
  getLink(){
      if(this.btn_buy=="Buy"){
        this.route.navigate(['./checkout'])
      }else if(this.btn_buy=="Go to course"){
        this.route.navigate(['./russian-u']);
      }
  }

  getToken(): string | null {
    // Your logic to retrieve the JWT token (e.g., from localStorage)
    return localStorage.getItem('token');
  }

  getDataWithToken(): Observable<any> {
    const apiUrl = 'http://localhost:8085/findCourses'; // Replace with your actual API endpoint
    const token_get = this.getToken();
    let token = token_get.replace(/^"(.*)"$/, '$1');
    // console.log(token+"55555")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });

    const requestOptions = { headers: headers };

    return this.http.get(apiUrl,requestOptions);
  }
  getData(): void {
    this.isSpin=false;
    this.getDataWithToken().subscribe(
      (response) => {
        this.courseUserName=response;
        // console.log(response);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  ngOnInit(): void {
    this.getData();
    this.isSpin=true;
    setTimeout(()=>{
        this.courseArray=[this.courseUserName];
        if(this.courseArray.length>0){
          this.isSpin=false;
          console.log(this.courseArray);
          if(this.courseArray[0].russian==1){
            this.btn_buy="Go to course";
            this.MatToolTip="Redirecting to the course page";
            localStorage.setItem('CourseAccess',this.btn_buy);
          }else{
            this.btn_buy="Buy";
          }
        }
        else{
          this.isSpin=false;
        }
    },2000);
  }
}


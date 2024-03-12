import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http:HttpClient){}
   
  saveContact(myform:any){
    this.http.post("http://localhost:8081/contact-form",myform,{responseType:'text' as 'json'}).subscribe((msg)=>{
      console.log(msg);
    })
    // console.log(myform);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http:HttpClient,private route:Router) { }
  
  Token:any="";
  signUpConflict:any;

}



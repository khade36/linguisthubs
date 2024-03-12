import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUserService } from '../loginUserService/login-user.service';
import { Router } from '@angular/router';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private http:HttpClient,private service:LoginUserService,private route:Router){} 

isFormShow:boolean=true;
isMsgSuccessShow:boolean=false;
isMsgFailShow:boolean=false;
pass:any;
isMsgSignupShow:boolean=false;
isWarnShow:boolean=false;
isInfoError:boolean=false;
number:any;
isLoginVisible:boolean=false;
mailSentTo:any;
emailForOTP:any;
hideCountdown:boolean=true;
ResendBtn:boolean=false;
OTPMsg:any;
showPassword_input:any="password";
isPasschange:boolean=false;
isLoginMainForm_visible:boolean=true;
countDownTimer:any;
toProcess_Saving_From_form:any="not processing";
isSpin:boolean=false;
timeOut:any;
btn:boolean=false;
generateOtpMail:any;
otpForForgotPass:any;
buttonClicked:boolean = false;

submit(details:any){
    this.isSpin=true;
    this.isMsgSignupShow=false;
    // console.log(details);
    this.http.post("http://localhost:8085/login",details,{responseType: 'text' as 'json'}).subscribe((result)=>{
     if(result!=null && JSON.stringify(result).length>5){
      // console.log(result);
      let token=result;
      localStorage.setItem('token',JSON.stringify(token));
      // console.log(localStorage.getItem('token')+"5555")
      this.isMsgFailShow=false;
      clearTimeout(this.timeOut);
      this.isMsgSuccessShow=true;
      this.isSpin=false;
      this.route.navigate(['home'])
     }
  });
   this.timeOut=setTimeout(()=>{
    this.isMsgFailShow=true;
    this.isSpin=false;
  },1000)
  setTimeout(()=>{
    this.isMsgFailShow=false;
  },2000)
}

// sign up started

signUp(signup:any){
  this.buttonClicked = true;
  setTimeout(()=>{
    this.isSpin=false;
    this.btn=false;
  },5000);
  this.isSpin=true;
  this.btn=true;
  this.isMsgSignupShow=false;
  this.emailForOTP=signup.email;
  this.mailSentTo=signup.email;
    this.http.post("http://localhost:8085/saveUser",signup,{responseType: 'text' as 'json'})
    .subscribe((result)=>{
      // console.log(result); 
    if(result=="registered successfully"){
      this.isSpin=false;
      if(signup.email==""){
        this.isLoginVisible=false; 
      }else{
        this.isLoginVisible=true;
      }
      this.isLoginVisible=true;
      this.isSingupShow();
      this.isSpin=false;
    }
    else if(result=="already registered"){
    setTimeout(()=>{
      this.isWarnShow=true;
      this.isSpin=false;
    },10); 
    setTimeout(()=>{
      this.isWarnShow=false;
    },1000)
    this.isSpin=false;
   }else{
    this.isSpin=false;
   }
});
}

/*creating the countdown timer*/
OTP(otp:any){
  var OTPM=otp.number1+otp.number2+otp.number3+otp.number4+otp.number5+otp.number6;
  this.isSpin=false;
  this.http.put(`http://localhost:8085/verify-account?email=${this.emailForOTP}&otp=${OTPM}`,{},{responseType: 'text' as 'json'}).subscribe((result)=>{
    // console.log(result);
    if(result=="otp verified you can login"){
    this.isLoginVisible=false;
    setTimeout(()=>{
      this.isMsgSignupShow=true;
    },500)
    this.isLoginMainForm_visible=true;
    this.route.navigate(['login']);
    this.isMsgSignupShow=false;
    }else if(result=="Please regenerate otp and try again"){
       // this.OTPMsg="Please regenerate otp and try again";
        this.hideCountdown=false;
        this.ResendBtn=true;
        this.isLoginVisible=true;
    }
  });
}
closePop(){
  this.isLoginVisible=false;
  this.isLoginMainForm_visible=true;
  location.reload();
}
/*To resend the otp*/
resendOtp(){
  // this.isSpin=true;
  this.http.put(`http://localhost:8085/regenerate-otp?email=${this.emailForOTP}`,{},{responseType:'text' as 'json'}).
  subscribe((result)=>{
     if(result=="Email send...please verify account within one minute"){
      // this.isSpin=false;
     // this.OTPMsg="Email sent...please verify account within two minute";
      this.ResendBtn=false;
      this.number=60;
      this.hideCountdown=true;
     }
  });
} 

PasswordChange(value:any){
  console.log(value);
  this.generateOtpMail=value.email;
  // this.isPasschange=false;
  // this.isLoginVisible=true;
  this.http.post("http://localhost:8085/password-reset",value,{responseType:'text' as 'json'}).subscribe((result)=>{
     if(result=="change done"){
      this.route.navigate(['login']);
     }else{
       alert("Please try again")
     }
  });
}
verifyotp(otpObject:any){
  var otpString = JSON.stringify(otpObject);
  this.http.post(`http://localhost:8085/activeAccount?email=${this.generateOtpMail}&otp=${encodeURIComponent(otpString)}`,{},{responseType: 'text' as 'json'}).subscribe((result)=>{
     if(result=="password updated"){
      this.isMsgSuccessShow=true;
      setTimeout(()=>{
        this.isMsgSuccessShow=false;
      },500)
      this.route.navigate(['login']);
     }
});
}

OTPshow(){
  this.isLoginVisible=true;
  this.isPasschange=false;
  this.isLoginVisible=false;
}

showPassword(){
 this.showPassword_input="text";
 this.isLoginVisible=false;
 this.isLoginMainForm_visible=false;
  }
forgotPassword(){
  this.isPasschange=true;
  this.isLoginMainForm_visible=false;
  }  
closePop_Set(){
  this.isPasschange=false;
  this.isLoginMainForm_visible=true;
}  
isSingupShow(){
  this.isLoginMainForm_visible=false;
  this.isLoginVisible=true;
  this.number=120;
  this.countDownTimer=setInterval(()=>{
  if(this.number>0){
  this.number=this.number-1;
  }
  if(this.number==0){
    this.ResendBtn=true;
  }
},1000);
}
}

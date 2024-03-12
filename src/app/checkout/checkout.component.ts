import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUserService } from '../loginUserService/login-user.service';
import { parse } from '@fortawesome/fontawesome-svg-core';

declare var Razorpay:any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
constructor(private http:HttpClient,private service:LoginUserService){}
razorPayObject:any;
LinguisthubsPromoCode:any;
// promoCode=any="LGH2024";
Total:number=300;
discount:number=101;
isAppliedPromo:boolean=false;


createTransactionAndPlaceOrder(){
 this.http.get("http://localhost:8085/createTransaction/1",{responseType:'text' as 'json'}).subscribe(
  (response)=>{
    console.log(response+"5555")
    this.openTransacationModal(response);
 },
 (error)=>{
  console.log(error);
 }
 );
}

 openTransacationModal(output:any){
 const response = JSON.parse(output);
//  console.log(response.key_id)
 var options={
 orderId:response.orderId,
 key:response.key_id,
 amount:response.amount,
 currency:response.currency,
 image:'/assets/forPG.png',
 handler:(response:any)=>{
    console.log(response);
   if(response!=null && response.razorpay_id!=null){
    console.log(response);
   }else{
    console.log("response");
   }
  },
  prefill:{
    name:'',
    email:'',
    contact:''
  },
  notes:{
    address:'Course Shopping'
  },
  theme:{
    color:'#800080'
  }
};
  // console.log(options);
  var razorPayObject =new Razorpay(options); 
  razorPayObject.open();
}
  getDiscount(){
 {
    if(this.LinguisthubsPromoCode=="LGH2024"){
    this.Total=this.Total-this.discount;
    this.isAppliedPromo=true;
  }else{
    this.Total=300;
    this.isAppliedPromo=false;
  }
 }  
 }
}

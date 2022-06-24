import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive';
  register:any;
  
  
    constructor(){ }
    ngOnInit(): void {
      this.register=new FormGroup({
        "firstname" : new FormControl('',[Validators.required,]),
        "lastname" : new FormControl('',[Validators.required]),
        "email" : new FormControl('',[Validators.required,Validators.email]),
        "password" : new FormControl('',[Validators.required]),
        "confirmpassword" : new FormControl('',[Validators.required]),
        "mobile" : new FormControl('',Validators.required)
      });
    }
   
  
   get firstname(){
     return this.register.get("firstname");
   }
   get lastname(){
    return this.register.get("lastname");
  }
  get email(){
    return this.register.get("email");
  }
  get password(){
    return this.register.get("password");
  }
  get confirmpassword(){
    return this.register.get("confirmpassword");
  }
  get mobile(){
    return this.register.get("mobile");
  }
  
  
  GetData(){
    console.log(this.register);
    localStorage.setItem("firstname",this.register.value.firstname);
    localStorage.setItem("lastname",this.register.value.lastname);
    localStorage.setItem("email",this.register.value.email);
    localStorage.setItem("password",this.register.value.password);
    localStorage.setItem("confirmpassword",this.register.value.confirmpassword);
    localStorage.setItem("mobile",this.register.value.mobile);
   
  
  
  }

}
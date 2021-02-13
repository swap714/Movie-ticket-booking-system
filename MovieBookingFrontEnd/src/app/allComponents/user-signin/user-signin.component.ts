import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../Shared/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css']
})
export class UserSigninComponent implements OnInit {
  loginForm:FormGroup;

  logindata: any;

  constructor(private loginService:LoginService,
              private toasterService:ToastrService,
              private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      userPassword: ['',[Validators.required]]

    });
  }

  onSubmit(){
     debugger;
    if(this.loginForm.valid){
      this.logindata=this.loginForm.value;
      // if(this.logindata.email=="sagar@gmail.com" && this.logindata.password=="123"){
      //   this.toasterService.success("Login Successfully");
      // }
      // else{
      //   this.toasterService.warning("login Failed");
      // }
      this.loginService.postLogin(this.logindata).subscribe(
        (data)=>{
          if(data!=null){
              this.logindata=data;
              this.toasterService.success(" Login Sucessfully")
          }
          else{
          this.toasterService.warning("Wrong Credentials")
          }
        },
        (error)=>{
          this.toasterService.warning("Wrong Credentials")
        }
      )

    // } else {
    //   alert('User form is not valid!!')
    // }
 }
}




}

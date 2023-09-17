import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/shared/services/service';
import { shareDataService } from 'src/shared/services/share.service';
import { ToastrService } from 'ngx-toastr';
import { Register_API } from 'src/shared/services/api.url-helper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  pageload=0;
  banner=0;
  regsuccess=0;
  constructor(private apiservice:ApiService, public sharedataservice:shareDataService, public router:Router,private toastr: ToastrService){
    
  }

  register(data:any){
    //console.warn(data);
    if(data.name=='' || data.phone=='' || data.regemail=='' || data.regpassword=='' || data.cpassword=='')
    {
      this.toastr.error('Required Fields Blank', 'Error',{
        closeButton:true
      });
    }
    else if(data.regpassword!=data.cpassword){
      this.toastr.error('Password Mismatch', 'Error',{
        closeButton:true
      });
    }
    else{
        this.pageload=1;
        this.banner=1;
        this.apiservice.post(Register_API,JSON.stringify(data)).subscribe((resp:any)=>{
          if(resp.result.error=='3'){
            this.toastr.success('Issue In Mail Server', 'Try Again',{
              closeButton:true
            });
            this.pageload=0;
          }
          else if(resp.result.success=='0'){
            this.toastr.error('Try Loging in with the credentials', 'User Exists Already',{
              closeButton:true
            });
            this.regsuccess=1;
          }
          else{
            this.toastr.success('You will Recieve a mail shortly with the OTP.', 'Registration Successful',{
              closeButton:true
            });
            this.regsuccess=1;
          }
          this.banner=0;
          
          
        });
     }
    }

}

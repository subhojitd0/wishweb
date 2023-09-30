import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForgetPass_API } from 'src/shared/services/api.url-helper';
import { ApiService } from 'src/shared/services/service';
import { shareDataService } from 'src/shared/services/share.service';

@Component({
  selector: 'app-passwordgen',
  templateUrl: './passwordgen.component.html',
  styleUrls: ['./passwordgen.component.css']
})
export class PasswordgenComponent {

  pageload=0;
  btnotp=1;
  btnval=0;
  disp=0;
  name:string="";
  otp:string="";
  res:string="";
  regpass:string="";

  constructor(private apiservice:ApiService, public sharedataservice:shareDataService, public router:Router,private toastr: ToastrService){
    
  }

  generateotp(){
    if(this.name!=''){
      this.toastr.warning('Mail is getting sent.', 'Check you Mail ID',{
        closeButton:true
      });
      
      this.btnotp=0;
      let data='{"mode":0,"userid":"'+this.name+'"}';
        this.apiservice.post(ForgetPass_API,data).subscribe((resp:any)=>{
        const response=resp.result.success;
        this.res=response;
        if(this.res=='1'){
          this.toastr.success('Mail Sent Successfully', 'Check you Mail ID',{
            closeButton:true
          });
          this.pageload=1;
          this.btnval=1;


        }else{
          this.toastr.error('Mail Failed', 'Try Again',{
            closeButton:true
          });
          this.btnotp=1;
        }
        });

    }else{
      this.toastr.error('Enter Username', 'Mandetory Field',{
        closeButton:true
      });
    }

  }

  validateotp(){
    if(this.otp!='' && this.regpass!=''){
      let data='{"mode":1,"userid":"'+this.name+'","otp":"'+this.otp+'","passwd":"'+this.regpass+'"}';
      //console.log(data);
      this.apiservice.post(ForgetPass_API,data).subscribe((resp:any)=>{
      const response=resp.result.success;
      this.res=response;
      if(this.res=='1'){
        this.toastr.success('Password Reset Succesfull.', 'Please Login!',{
          closeButton:true
        });
        this.btnotp=0;
        this.btnval=0;
        this.disp=1;
      }
      else{
        this.toastr.error('Password Reset Failed.', 'Please Try Again!',{
          closeButton:true
        });
        this.btnotp=0;
        this.btnval=1;
       }
      
      
      });
    }
    else{
      this.toastr.error('Mandetory Field Missing.', 'Enter all details',{
      closeButton:true
      });
   }


  }

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HOME_URL } from 'src/shared/constants/constant';
import { ValidateRegister_API } from 'src/shared/services/api.url-helper';
import { ApiService } from 'src/shared/services/service';
import { shareDataService } from 'src/shared/services/share.service';

@Component({
  selector: 'app-regvalidate',
  templateUrl: './regvalidate.component.html',
  styleUrls: ['./regvalidate.component.css']
})
export class RegvalidateComponent {

  constructor(private apiservice:ApiService, public sharedataservice:shareDataService, public router:Router,private toastr: ToastrService){
    
  }

  validatecode(data:any){


    if(data.value==''){
      this.toastr.error('Enter a Value', 'Error',{
        closeButton:true
      });
    }
    else{
        //console.log(data.value);
        this.apiservice.post(ValidateRegister_API,JSON.stringify(data.value)).subscribe((resp:any)=>{
          if(resp.result.success=='0' || resp.result.success=='3'){
            this.toastr.error('Enter the correct Code', 'Try Again',{
              closeButton:true
            }); 
          }         
          else{
            localStorage.setItem('wishlogin', "1");
            localStorage.setItem('wishuseremail', resp.result.email);
            localStorage.setItem('wishusername', resp.result.name);
            this.toastr.success('Validation Successful', 'Registered!',{
              closeButton:true
            }); 
            window.location.href=HOME_URL;
            //this.router.navigate(['/']);
          }
        });
    }


  }
}

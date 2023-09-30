import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Profile_API } from 'src/shared/services/api.url-helper';
import { ApiService } from 'src/shared/services/service';
import { shareDataService } from 'src/shared/services/share.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  name:string="";
  phone:string="";
  email:string="";
  address:string="";
  pin:string="";

  constructor(private apiservice:ApiService, public sharedataservice:shareDataService, public router:Router,private toastr: ToastrService){
  
  } 
  
  ngOnInit(): void {
    let data='{"mode":0,"user":"'+localStorage.getItem('wishuseremail')+'"}';
      this.apiservice.post(Profile_API,data).subscribe((resp:any)=>{
     if(resp.result.id!="0")
     {       
        this.name=resp.result.name;
        this.email=resp.result.email;
        this.phone=resp.result.phone;
        this.address=resp.result.address;
        this.pin=resp.result.pin;
     }
     else{
      this.toastr.error('Error to Load', 'Try Again',{
        closeButton:true
      })
     }      
    })
  }


  updateprofile(){
    let dataupd='{"mode":1,"user":"'+localStorage.getItem('wishuseremail')+'","address":"'+this.address+'","pin":"'+this.pin+'","phone":"'+this.phone+'"}';
    this.apiservice.post(Profile_API,dataupd).subscribe((resp:any)=>{
      
      if(resp.result.status=='1'){
        this.phone=resp.result.phone;
        this.address=resp.result.address;
        this.pin=resp.result.pin;
        this.toastr.success('Data Updated Succesfull.', 'Update Successful',{
          closeButton:true
        });
        
      }
      else{
        this.toastr.error('Data Update Failed.', 'Update Failed',{
          closeButton:true
        });
      }
    });
  }
  

}

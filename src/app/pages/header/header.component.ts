import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Category_API } from '../../../shared/services/api.url-helper';
import { ApiService } from '../../../shared/services/service';
import {Login_API} from '../../../shared/services/api.url-helper';
import { shareDataService } from 'src/shared/services/share.service';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';

export interface category {
  id: string;
  name: string;
  rts: string;
  image: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  category: category[] = [];
  loggedin:boolean=false;
  loc:any;
  submenu:boolean=false;
  searchval:any;

  constructor(private apiservice:ApiService, public sharedataservice:shareDataService, public router:Router,private toastr: ToastrService){
    let isloggedin = localStorage.getItem('wishlogin'); 
    if(isloggedin && isloggedin == "1"){
      this.loggedin=true;
    }
    this.submenu=false;
    
  }

  ngOnInit(){
    let data='{"mode":0}';
    this.apiservice.post(Category_API,data).subscribe((resp:any)=>{
      const category:category[]=resp.result;
      this.category=category;
      
    })

  
  }

  validate_login(data:any){
      this.apiservice.post(Login_API,JSON.stringify(data)).subscribe((resp:any)=>{
      if(resp.result.email!=''){
        this.toastr.success('Logged In', 'Login',{
          closeButton:true
        });
        this.loggedin==true
        localStorage.setItem('wishlogin', "1");
        localStorage.setItem('wishuseremail', resp.result.email);
        localStorage.setItem('wishusername', resp.result.name);
        
        window.location.reload();
        
        
      }
      else{
        this.toastr.error('Invalid Credentials or User ID not available.', 'Login',{
          closeButton:true
        })
      }
      
     })
  }

  logout(){
    this.toastr.error('Logged Out');
    this.loggedin==false;
    localStorage.clear();
    window.location.href='/';
  }

  showsubmenu(data:any){
    if(data && data.target.id==="menushow") {
      
    if(this.submenu==false || data.target.nextSibling.style.display==="none"){
     this.submenu=true; 
     data.target.nextSibling.style.display = "block";
     }
     else{
     this.submenu=false;
     data.target.nextSibling.style.display = "none";
     }
    }
    
  }


  gotoSearch(val:any){
    this.router.navigate(['search/',val])
  }

}




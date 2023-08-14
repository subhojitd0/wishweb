import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { ApiService } from '../../../shared/services/service';
import {Login_API} from '../../../shared/services/api.url-helper';
import { shareDataService } from 'src/shared/services/share.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  loggedin:boolean=false;
  loc:any;

  constructor(private apiservice:ApiService, public sharedataservice:shareDataService){
    let isloggedin = localStorage.getItem('wishlogin'); 
    if(isloggedin && isloggedin == "1"){
      this.loggedin=true;
    }
    

  }

  validate_login(data:any){
      this.apiservice.post(Login_API,JSON.stringify(data)).subscribe((resp:any)=>{
      if(resp.result.email!=''){
        this.loggedin==true
        localStorage.setItem('wishlogin', "1");
        window.location.reload();
      }
      
     })
  }

  logout(){
    this.loggedin==false;
    localStorage.clear();
    window.location.reload();
  }

}

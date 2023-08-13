import { Component } from '@angular/core';
import { ApiService } from '../../../shared/services/service';
import {Login_API} from '../../../shared/services/api.url-helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  loggedin:boolean=false;

  constructor(private apiservice:ApiService){
    let isloggedin = localStorage.getItem('wishlogin'); 
    if(isloggedin && isloggedin == "1"){
      this.loggedin=true;
    }
  }

  validate_login(data:any){
      //console.warn(data);
      this.apiservice.post(Login_API,JSON.stringify(data)).subscribe((resp:any)=>{
      if(resp.result.email!=''){
        this.loggedin==true
        localStorage.setItem('wishlogin', "1");
      }
      
     })
  }

}

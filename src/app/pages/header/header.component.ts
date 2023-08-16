import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Category_API } from '../../../shared/services/api.url-helper';
import { ApiService } from '../../../shared/services/service';
import {Login_API} from '../../../shared/services/api.url-helper';
import { shareDataService } from 'src/shared/services/share.service';

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

  constructor(private apiservice:ApiService, public sharedataservice:shareDataService){
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

  showsubmenu(){
    if(this.submenu==false)
      this.submenu=true;
    else
      this.submenu=false;
  }

}

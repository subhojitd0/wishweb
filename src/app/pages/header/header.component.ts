import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Cart_API, Category_API, Occasion_API } from '../../../shared/services/api.url-helper';
import { ApiService } from '../../../shared/services/service';
import {Login_API} from '../../../shared/services/api.url-helper';
import { shareDataService } from 'src/shared/services/share.service';
import { ToastrService } from 'ngx-toastr';
import { TreeNode } from 'primeng/api';

export interface category {
  id: string;
  name: string;
  rts: string;
  image: string;
}

export interface occasion {
  id: string;
  name: string;
  display: string;
}


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  category: category[] = [];
  occasion:occasion[]=[];
  sidebarcategory: any= [];
  loggedin:boolean=false;
  loc:any;
  submenu:boolean=false;
  submenuocc:boolean=false;
  searchval:any;
  sidebarVisible:boolean=false;
  files!: TreeNode[];
  selectedFile!: TreeNode;
  cartinfo:any;

  constructor(private apiservice:ApiService, public sharedataservice:shareDataService, public router:Router,private toastr: ToastrService){
    let isloggedin = localStorage.getItem('wishlogin'); 
    if(isloggedin && isloggedin == "1"){
      this.loggedin=true;
    }
    this.submenu=false;
  }

  ngOnInit(){
    let sidebardata='{"mode":5}';
      this.apiservice.post(Category_API,sidebardata).subscribe((resp:any)=>{
      const sidebarcategory=resp.result;
      this.sidebarcategory=sidebarcategory;
      
    })

    let data='{"mode":0}';
      this.apiservice.post(Category_API,data).subscribe((resp:any)=>{
      const category:category[]=resp.result;
      this.category=category;
      
    })

    let occasiondata='{"mode":0}';
    this.apiservice.post(Occasion_API,occasiondata).subscribe((resp:any)=>{
      const occasion:occasion[]=resp.result;
      this.occasion=occasion;
      
    })


        let datacart='{"mode":0,"user":"'+localStorage.getItem('wishuseremail')+'"}';
        this.apiservice.post(Cart_API,datacart).subscribe((resp:any)=>{
        const respcart=resp.meta;
        this.cartinfo=respcart;
        this.sharedataservice.cartcount=this.cartinfo.count;
        });

  
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


  showsubmenuocc(data:any){
    if(data && data.target.id==="menushowocc") {
      // this.submenuocc=true; 
    if(this.submenuocc==false || data.target.nextSibling.style.display==="none"){
     this.submenuocc=true; 
     data.target.nextSibling.style.display = "block";
     }
     else{
     this.submenuocc=false;
     data.target.nextSibling.style.display = "none";
     }
     }
  
  }

  sidebarToggle(){
    this.sidebarVisible=true;
  }

  showSubCat(val:any){

  }


  gotoSearch(val:any){
    this.router.navigate(['search/',val])
  }


  

}




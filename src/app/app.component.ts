import { Component,HostListener,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wishweb';
  subMenu:any;
  subMenuocc:any;

  @HostListener('document:click', ['$event']) clickout($event:any){
    if($event.target.id !== "menushow" && this.subMenu !=null && this.subMenu.style.display === 'block'){
    this.subMenu.style.display = 'none';
    }
    else if($event.target.id !== "menushowocc" && this.subMenuocc !=null && this.subMenuocc.style.display === 'block'){
      this.subMenuocc.style.display = 'none';
    }

  }
 
  ngOnInit(): void {
    this.subMenu  = document.getElementById('submenu');
    this.subMenuocc  = document.getElementById('submenuocc');
  }
}

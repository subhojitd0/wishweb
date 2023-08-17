import { Component,HostListener,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'wishweb';
  subMenu:any;

  @HostListener('document:click', ['$event']) clickout($event:any){
    if($event.target.id !== "menushow" && this.subMenu !=null && this.subMenu.style.display === 'block'){
    this.subMenu.style.display = 'none';
    }

  }
 
  ngOnInit(): void {
    this.subMenu  = document.getElementById('submenu');
  }
}

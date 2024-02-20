import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/service';
import { Category_API, Slider_API } from '../../../shared/services/api.url-helper';
import { shareDataService } from '../../../shared/services/share.service';

export interface category {
  id: string;
  name: string;
  rts: string;
  image: string;
}

export interface slider {
  id: string;
  name: string;
  occassion:string;
  category:string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit{

  category: category[] = [];
  slider:slider[]=[];

    constructor(private apiservice:ApiService, private sharedataservice:shareDataService) {
      this.sharedataservice.sharedata='home';
    }
    
    ngOnInit(){
        let data='{"mode":0}';
        let sldata='{"mode":0}';

        this.apiservice.post(Category_API,data).subscribe((resp:any)=>{
          const category:category[]=resp.result;
          this.category=category;
          
        })

        this.apiservice.post(Slider_API,sldata).subscribe((resp:any)=>{
          const slider:slider[]=resp.result;
          this.slider=slider;
          
        })



      }
      
 
}

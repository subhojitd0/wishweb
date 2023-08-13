import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/service';
import { Category_API } from '../../../shared/services/api.url-helper';

export interface category {
  id: string;
  name: string;
  rts: string;
  image: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit{

  category: category[] = [];

    constructor(private apiservice:ApiService) {}
    
    ngOnInit(){
        let data='{"mode":0}';
        this.apiservice.post(Category_API,data).subscribe((resp:any)=>{
          const category:category[]=resp.result;
          this.category=category;
          
        })
      }
      
 
}

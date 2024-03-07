import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Category_API, Occasion_API, Product_API } from 'src/shared/services/api.url-helper';
import { ApiService } from 'src/shared/services/service';
import { shareDataService } from 'src/shared/services/share.service';


export interface category {
  id: string;
  name: string;
  rts: string;
  image: string;
}

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})


export class PersonalComponent {

 
  category:any;
  m=0;

  constructor(private activatedRoute:ActivatedRoute, private sharedataservice:shareDataService, private apiservice:ApiService) {
    this.sharedataservice.sharedata='personal';
  }


  ngOnInit(): void {
   
          let data='{"mode":1}';
          this.apiservice.post(Category_API,data).subscribe((resp:any)=>{
            const category:category[]=resp.result;
            this.category=category;
            
          })
        this.sharedataservice.sharedata='personal';
      
    }




}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Category_API, Occasion_API, Product_API } from 'src/shared/services/api.url-helper';
import { ApiService } from 'src/shared/services/service';
import { shareDataService } from 'src/shared/services/share.service';


export interface product {
  id: string;
  subcode: string;
  name: string;
  description: string;
  category:string;
  subcategory:string;
  price:string;
  img1:string;
  img2:string;
  img3:string;
  img4:string;
  available:string;
  quantity:string;
  priority:string
}


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent implements OnInit {

  categoryid:any;
  product:any;
  category:any;

  constructor(private activatedRoute:ActivatedRoute, private sharedataservice:shareDataService, private apiservice:ApiService){
    this.sharedataservice.sharedata='category';
  }

  ngOnInit(): void {
    //this.categoryid=this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.paramMap.subscribe(param=>{
      this.categoryid=param.get('id');
      

      if(this.categoryid.length<3){
          let data='{"mode":0, "categoryid":'+this.categoryid+'}';
          this.apiservice.post(Product_API,data).subscribe((resp:any)=>{
          const prod:product[]=resp.result;
          this.product=prod;
        });


          let datacat='{"mode":3, "categoryid":'+this.categoryid+'}';
          this.apiservice.post(Category_API,datacat).subscribe((resp:any)=>{
          const category=resp.result;
          this.category=category;
        })
      }
      else{
        
          let data='{"mode":4, "occasion":"'+this.categoryid+'"}';
          this.apiservice.post(Occasion_API,data).subscribe((resp:any)=>{
          const prod:product[]=resp.result;
          this.product=prod;

          this.category={'name':"Occasion Special - "+this.categoryid};
        });
      }

      

    })
    
    
    }

  
}

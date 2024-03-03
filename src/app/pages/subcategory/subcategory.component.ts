import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Subcategory_API, Occasion_API, Product_API } from 'src/shared/services/api.url-helper';
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
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  
  subcategoryid:any;
  product:any;
  category:any;
  m=0;

  constructor(private activatedRoute:ActivatedRoute, private sharedataservice:shareDataService, private apiservice:ApiService){
    
  }



  
  filterSelection(val:any){

    if(val=='LH') this.m=7;else this.m=8;

    
      let data='{"mode":'+this.m+', "categoryid":'+this.subcategoryid+'}';
      this.apiservice.post(Product_API,data).subscribe((resp:any)=>{
      const prod:product[]=resp.result;
      this.product=prod;
    });

      let datacat='{"mode":3,"categoryid":'+this.subcategoryid+'}';
      this.apiservice.post(Subcategory_API,datacat).subscribe((resp:any)=>{
      const category=resp.result;
      this.category=category;
    })
    //this.sharedataservice.sharedata='category';
    
  }

  ngOnInit(): void {
    //this.categoryid=this.activatedRoute.snapshot.paramMap.get('id');

    this.activatedRoute.paramMap.subscribe(param=>{
      this.subcategoryid=param.get('id');
      
    this.m=0;
    
      if(this.subcategoryid.length<3){
          let data='{"mode":6, "categoryid":'+this.subcategoryid+'}';
          this.apiservice.post(Product_API,data).subscribe((resp:any)=>{
          const prod:product[]=resp.result;
          this.product=prod;
        });


          let datacat='{"mode":3, "categoryid":'+this.subcategoryid+'}';
          this.apiservice.post(Subcategory_API,datacat).subscribe((resp:any)=>{
          const category=resp.result;
          this.category=category;
        })

        //this.sharedataservice.sharedata='category';
      }
    

      

    })
    
    
    }


}

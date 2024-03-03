import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category_API, Product_API } from 'src/shared/services/api.url-helper';
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
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent implements OnInit {

  product:any;
  searchkey:any;
  m=5;

  constructor(private activatedRoute:ActivatedRoute, private sharedataservice:shareDataService, private apiservice:ApiService){
    this.sharedataservice.sharedata='category';
  }

  filterSelection(val:any){

    if(val=='LH') this.m=9;else this.m=10;

    this.activatedRoute.paramMap.subscribe(param=>{
      this.searchkey=param.get('data');
   
  
      let data='{"mode":"'+this.m+'", "search":"'+this.searchkey+'"}';
      console.warn(data);
      this.apiservice.post(Product_API,data).subscribe((resp:any)=>{
        const prod:product[]=resp.result;
        this.product=prod;
      });
    })


  }



  ngOnInit(): void {

    this.m=5;
    this.activatedRoute.paramMap.subscribe(param=>{
      this.searchkey=param.get('data');
   
  
      let data='{"mode":5, "search":"'+this.searchkey+'"}';
      console.warn(data);
      this.apiservice.post(Product_API,data).subscribe((resp:any)=>{
        const prod:product[]=resp.result;
        this.product=prod;
      });
    })
    

  }

}


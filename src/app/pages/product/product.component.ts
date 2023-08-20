import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cart_API, Product_API } from 'src/shared/services/api.url-helper';
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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  logincheck:any;
  productid:any;
  product:any;
  userid:any;

  constructor(private activatedRoute:ActivatedRoute, private sharedataservice:shareDataService, private apiservice:ApiService,private toastr: ToastrService){
    this.sharedataservice.sharedata='category';
    this.logincheck=localStorage.getItem('wishlogin'); 
    this.userid=localStorage.getItem('wishuseremail'); 
  }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe(param=>{
      this.productid=param.get('id');

      let data='{"mode":4, "productid":'+this.productid+'}';
      this.apiservice.post(Product_API,data).subscribe((resp:any)=>{
        const prod:product[]=resp.result;
        this.product=prod;
      });

    })
  }

  addtocart(){

    let data='{"mode":1, "productid":'+this.productid+', "user":"'+this.userid+'"}';
    this.apiservice.post(Cart_API,data).subscribe((resp:any)=>{
      const success:string=resp.success;
      if(success=='1')
      {
        console.log('Product Added');
        this.toastr.success('Product Added Succesfully','Added to Cart', {
          tapToDismiss: true,
        });
      }
      if(success=='4'){
        console.warn('No More Product Available to Add');
        this.toastr.error('Max Number of Product Added','Cart Add Failed', {
          tapToDismiss: true,
        });
      }
    });

  }
}

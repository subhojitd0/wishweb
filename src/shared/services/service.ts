import {API_URL} from '../constants/constant';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn:'root',
})

export class ApiService {

  constructor(private http:HttpClient) {} 

  post(url: any, jsonData: any){
       return this.http.post(API_URL+url,jsonData)
  }
}

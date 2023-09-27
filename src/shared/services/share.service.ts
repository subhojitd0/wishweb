import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn:'root',
})

export class shareDataService {

  public sharedata:string='';
  public cartcount:string='';
}


import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Api } from './../core/enums/api.enum';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../core/services/api-service';
import { IList } from '../core/types/IList';
import { UserDto } from '../dtos/UserDto';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService{

  constructor(http: HttpClient, router: Router) {
    super(http, router);

  }
  /**
   * Developer’a not:
Api: DummyApi / https://dummyapi.io/explorer
Api Url: https://dummyapi.io/data/v1/user?limit=10
Auth: Header’da app-id parametresine “611f33c594916dee4af13a68”  değeri gönderilmeli
   *
   */
  getUsers(model:{limit:number,page:number}):Observable<IList<UserDto>>{
    let userCount=model.limit+(model.limit*model.page);
    return this.get(environment.appRoot,'user?limit='+userCount,null).pipe(map((res:IList<UserDto>)=>{return res}))
  }
}

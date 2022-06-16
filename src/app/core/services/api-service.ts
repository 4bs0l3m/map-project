import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export abstract class ApiService {

  constructor(private http: HttpClient, private router: Router) {

  }

  get(root:string,uri:string,params?:any){
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id':environment.appId

    });
    return this.http.get<any>(root+uri, { headers: headers, observe: 'response' }).pipe(
      map((res: any) => {
        return res.body;
      }));
  }
  post(root:string,uri:string,body?:any,params?:any){
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'app-id':environment.appId

    });
    return this.http.post<any>(root+uri, body, { headers: headers, observe: 'response' }).pipe(
      map((res: any) => {
        return res.body;
      }));
  }
  delete(){
    //todo
  }
  put(){
    //todo
  }
  patch(){
    //todo
  }
}

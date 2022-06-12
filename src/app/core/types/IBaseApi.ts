import { IResponseBody } from './IResponseBody';
import { Observable } from "rxjs";

export interface IBaseApi {
  get(header:any,body:any):Observable<IResponseBody>;
  post():Observable<IResponseBody>;
  delete():Observable<string>;
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  /**
   * return an observable which produces a response from a request to GET ...api.
   */
  getUser() : Observable<any>{
    return this.httpClient.get("");
  }

  /**
   * TODO: return an observable which produces a response from a request to GET /v3/reports from the spaceflight api.
   * The full URL would be https://api.spaceflightnewsapi.net/v3/reports.
   */
  () : Observable<any>{
    return this.httpClient.get("");
  }

  /**
   * return an observable which produces a response from a request to GET /v3/reports/{id} from the spaceflight api.
   */
  (id : number) : Observable<any>{
    return this.httpClient.get("");
  }
}

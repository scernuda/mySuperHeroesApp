// Core Imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  options: any;
  url: string;
  baseURI: string;

  constructor(public http: HttpClient) {
    this.options = {
      withCredentials: true
    };
    this.url = this.baseURI ? this.baseURI : this.url;
  }

  authOptions(options: any): any {
    return Object.assign(options || {}, this.options);
  }

  list(options?: any): Observable<any> {
    return this.http.get(this.url, this.authOptions(options));
  }

  create(item: any, options?: any): Observable<any> {
    return this.http.post(this.url, item, this.authOptions(options));
  }

  read(id: string, options?: any): Observable<any> {
    return this.http.get(this.urlWithId(id), this.authOptions(options));
  }

  delete(id: string, options?: any): Observable<any> {
    return this.http.delete(this.urlWithId(id), this.authOptions(options));
  }

  update(id: string, item: any, options?: any): Observable<any> {
    return this.http.put(this.urlWithId(id), item, this.authOptions(options));
  }

  private urlWithId(id: string): string {
    return [this.url, id].join('/');
  }
}

import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends AuthApiService {

  constructor(public http: HttpClient) {
    super(http);
    this.options = {};
  }
}

import { Injectable } from '@angular/core';
import { AuthApiService } from './auth-api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends AuthApiService {

  constructor() {
    super();
    this.options = {};
  }
}

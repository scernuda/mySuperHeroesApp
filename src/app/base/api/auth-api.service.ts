// Core Imports
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Moks Imports
import { HEROES } from '../moks/heroes';

// Types Imports
import { Hero } from '../types/hero';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  options: any;
  url: string;
  baseURI: string;
  heroes: Hero[] = HEROES;

  constructor() {
    this.options = {
      withCredentials: true
    };
    this.url = this.baseURI ? this.baseURI : this.url;
  }

  list(options?: any): Hero[] {
    return this.heroes;
  }

  create(item: any, options?: any): Hero[] {
    return this.heroes;
  }

  read(id: string, options?: any): Hero[] {
    return this.heroes;
  }

  delete(id: string, options?: any): Hero[] {
    return this.heroes;
  }

  // ---------------------------------------------------------------
  // this is an example of how we would make requests to a rest api.
  // ---------------------------------------------------------------
  /*updateWithApiRest(id: string, item: any, options?: any): Observable<any> {
    return this.http.put(this.urlWithId(id), item, this.authOptions(options));
  }

  authOptions(options: any): any {
    return Object.assign(options || {}, this.options);
  }

  private urlWithId(id: string): string {
    return [this.url, id].join('/');
  }*/
}

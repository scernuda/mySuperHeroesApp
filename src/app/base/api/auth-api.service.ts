// Core Imports
import { Injectable } from '@angular/core';

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

  create(hero: Hero, options?: any): Hero[] {
    hero.id = this.heroes.length + 1
    this.heroes.push(hero)
    return this.heroes;
  }

  read(id: number, options?: any): Hero {
    return this.heroes[id - 1];
  }

  delete(hero: Hero, options?: any): Hero[] {
    const index = this.heroes.indexOf(hero, 0);
    if (index > -1) {
      this.heroes.splice(index, 1);
    }
    return this.heroes;
  }

  update(hero: Hero, options?: any): Hero[] {
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

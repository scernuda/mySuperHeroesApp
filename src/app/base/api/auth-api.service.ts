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
  baseURI: string;
  heroes: Hero[] = HEROES;

  constructor() {}

  list(options?: any): Hero[] {
    if(options != null && options != ''){
      var filteredHeroes: Hero[] = this.heroes.filter(hero => hero.alias.toUpperCase().includes(options.toUpperCase()) ); // Filtered by Alias.
      return filteredHeroes;
    }
    return this.heroes;
  }

  create(hero: Hero) {
    hero.id = this.heroes.length + 1
    this.heroes.push(hero)
  }

  read(id: number): Hero {
    const elementIndex = this.heroes.findIndex(element => element.id == id )
    return this.heroes[elementIndex];
  }

  delete(hero: Hero): Hero[] {
    const elementIndex = this.heroes.findIndex(element => element.id == hero.id )
    this.heroes.splice(elementIndex, 1);
    return this.heroes;
  }

  update(hero: Hero) {
    let updateItem = this.heroes.find(this.findIndexToUpdate, hero.id);
    let index = this.heroes.indexOf(updateItem);
    this.heroes[index] = hero;
  }

  findIndexToUpdate(newItem: any) { 
    return newItem.id === this;
  }
}

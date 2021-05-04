// core Import.
import { Injectable } from '@angular/core';

// Enviroment Import.
import { environment } from 'src/environments/environment';

// Types Imports.
import { Hero } from '../../../../base/types/hero';

// Services Import.
import { ApiService } from 'src/app/base/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ListService extends ApiService{

  // We can overwrite that url when we have our hero apiRest running.
  // url = environment.herosApi + '/list-heroes';  

  /**
   * getHeroes.
   *
   * Method for map the response of the heroes collection.
   *
   * @since 1.0.0
   * @access public
   *
   * @return {response} Return the mapping response of the heroes collection.
   */
  getHeroes(params?: any): Hero[] {
    return super.list(params);
  }

}
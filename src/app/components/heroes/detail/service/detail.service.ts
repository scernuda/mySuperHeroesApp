import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
// Services.
import { ApiService } from 'src/app/base/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class DetailService extends ApiService{

  // We can overwrite that url when we have our hero apiRest running.
  // url = environment.herosApi + '/list-heroes';  

}
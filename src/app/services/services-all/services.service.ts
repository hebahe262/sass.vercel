import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private readonly _httpClient=inject(HttpClient)
  constructor() { }
  getmails() : Observable <any> {
    return this._httpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
   }

   getSpecificProducts(id:string|null):Observable <any>{
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)


   }
}

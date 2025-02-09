import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
private readonly _httpClient=inject(HttpClient)
  constructor() { }
  getCategories(Category:string) : Observable <any>{
    return this._httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodListItem, ResponseFoodListItem } from '../interface';
import { Observable } from 'rxjs';
import { tap, map, concatMap, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private  http: HttpClient
  ) { }

  loadData(): Observable<FoodListItem[]>{
    return this.http.get<ResponseFoodListItem>('https://dog.ceo/api/breed/shiba/images/random/12')
      .pipe(
        map((res) => {
          const images = res.message;
          return images.map(image => {
            return {image, link: 'https://twitter.com/about_hiroppy/status/1366933457109012480'};
          });
        })
      );
  }
}

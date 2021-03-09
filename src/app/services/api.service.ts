import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {FoodListItem, ResponseFoodListItem, ResponseStock, ResponseUsers, Stock, User} from '../interface';
import { Observable } from 'rxjs';
import { tap, map, concatMap, } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = 'https://arcane-bastion-80677.herokuapp.com';
  familyId = 'hoge';

  constructor(
    private  http: HttpClient
  ) { }

  // いいねを取得する
  // tab1
  // done
  getFavorites(familyId: string): Observable<FoodListItem[]>{
    return this.http.get<ResponseFoodListItem>(`${this.baseURL}/get-favorites/${familyId}`)
      .pipe(
        map((response) => {
          const datas = response.res;
          return datas.map(data => {
            return {image: data.img, link: data.link};
          });
        })
      );
  }

  // ストックを取得する
  // tab2
  // done
  getStock(familyId: string): Observable<Stock>{
    return this.http.get<ResponseStock>(`${this.baseURL}/show-stock/${familyId}`)
      .pipe(
        map((response) => {
          return {link: response.twi_link};
        })
      );
  }

  // ストックを作成・更新する
  // tab1
  updateStock(familyId: string, twitterLink: string): Observable<Stock>{
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post<ResponseStock>(`${this.baseURL}/create-stock`, {family_id: familyId, twi_link: twitterLink})
      .pipe(
        map((response) => {
          return {link: response.twi_link};
        })
      );
  }

  // ストックを削除する
  // tab2
  deleteStock(familyId: string): Observable<Stock>{
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post<ResponseStock>(`${this.baseURL}/delete-stock`, {family_id: familyId})
      .pipe(
        map((response) => {
          return {link: response.twi_link};
        })
      );
  }

  // 設定一覧(登録ユーザ一覧)
  // tab3の下のページ
  // done
  showUsers(familyId: string): Observable<User[]>{
    return this.http.get<ResponseUsers>(`${this.baseURL}/show-config/${familyId}`)
      .pipe(
        map((response) => {
          const users = response.twi_id;
          return users.map(user => {
            return {twitterId: user};
          });
        })
      );
  }

  // 登録ユーザ更新
  // tab3の下のページ
  // done
  updateUser(familyId: string, twitterId: string): Observable<User[]>{
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post<ResponseUsers>(`${this.baseURL}/update-config`,
      {family_id: familyId, twi_id: twitterId}, {headers})
      .pipe(
        map((response) => {
          const users = response.twi_id;
          return users.map(user => {
            return {twitterId: user};
          });
        })
      );
  }

  // 部屋作成
  // signup
  // done
  createFamilyRoom(familyId: string, twitterId: string): Observable<FoodListItem[]>{
    console.log(twitterId);
    console.log(familyId);
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post<ResponseFoodListItem>(`https://arcane-bastion-80677.herokuapp.com/create-family`,
      {family_id: familyId, twi_id: twitterId}, {headers})
      .pipe(
        map((response) => {
          const datas = response.res;
          return datas.map(data => {
            return {image: data.img, link: data.link};
          });
        })
      );
  }

  // 入室
  // signin
  // done
  enterFamilyRoom(familyId: string): Observable<FoodListItem[]>{
    return this.http.get<ResponseFoodListItem>(`${this.baseURL}/enter/${familyId}`)
      .pipe(
        map((response) => {
          const datas = response.res;
          return datas.map(data => {
            return {image: data.img, link: data.link};
          });
        })
      );
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FoodListItem, ResponseFoodListItem } from '../interface';
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
  getFavorites(): Observable<FoodListItem[]>{
    return this.http.get<ResponseFoodListItem>(`${this.baseURL}/get-favorites/${this.familyId}`)
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
  getStocks(){
    return this.http.get(`${this.baseURL}/show-stock/${this.familyId}`);
  }

  // ストックを作成・更新する
  // tab1
  updateStocks(){
    console.log('post');
    return this.http.post(`${this.baseURL}/create-stock`, {twi_link: 'hoge'});
  }

  // ストックを削除する
  // tab2
  deleteStock(){
    console.log('post');
    return this.http.post(`${this.baseURL}/delete-stock/${this.familyId}`, {twi_link: 'hoge'});
  }

  // 設定一覧(登録ユーザ一覧)
  // tab3の下のページ
  showUsers(){
    console.log('get');
    return this.http.get(`${this.baseURL}/show-config/${this.familyId}`);
  }

  // 登録ユーザ更新
  // tab3の下のページ
  updateUser(){
    console.log('post');
    return this.http.post(`${this.baseURL}/update-config`, {twi_link: 'hoge'});
  }

  // 部屋作成
  // signup
  createFamilyRoom(): Observable<FoodListItem[]>{
    console.log('post');
    return this.http.post<ResponseFoodListItem>(`${this.baseURL}/create-family`, {twi_link: 'hoge'})
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
  enterFamilyRoom(): Observable<FoodListItem[]>{
    return this.http.get<ResponseFoodListItem>(`${this.baseURL}/enter/${this.familyId}`)
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

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {FoodListItem} from '../../interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{


  datas: FoodListItem[] = [];

  constructor(
    private  api: ApiService
  ) {}


  ngOnInit(){
  }

  ionViewDidEnter(){
    this.getFavorites();
  }

  getFavorites(){
    this.api.getFavorites('firstFamily').subscribe(
      res => {
        console.log(res);
        this.datas = res;
      }
    );
  }
}

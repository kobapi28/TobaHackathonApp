import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {FoodListItem} from '../../interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  /*
  datas: FoodListItem[] = [
    {
      image: 'https://pbs.twimg.com/media/Ev9LvI9UcAE1c-Z.jpg',
      link: 'https://twitter.com/70_pocky/status/1368896109137956864'
    },
    {
      image: 'https://pbs.twimg.com/media/Ev9LvI9UcAE1c-Z.jpg',
      link: 'https://twitter.com/70_pocky/status/1368896109137956864'
    },
    {
      image: 'https://pbs.twimg.com/media/Ev9LvI9UcAE1c-Z.jpg',
      link: 'https://twitter.com/70_pocky/status/1368896109137956864'
    },
  ];*/

  // APIの制限かからん為に
  datas: FoodListItem[] = [];

  constructor(
    private  api: ApiService
  ) {}


  ngOnInit(){
    this.getFavorites();
  }

  ionViewDidEnter(){
    // this.getFavorites();
  }

  getFavorites(){
    this.api.getFavorites(this.api.getFamilyId()).subscribe(
      res => {
        console.log(res);
        this.datas = res;
      }
    );
  }
}

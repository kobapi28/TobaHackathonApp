import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {Stock} from '../../interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  stock: Stock = {link: ''};

  constructor(
    private api: ApiService
  ) {}

  ionViewDidEnter(){
    this.getStock();
  }

  getStock(){
    this.api.getStock('firstFamily').subscribe(
      res => {
        console.log(res);
        this.stock = res;
      }
    );
  }

  deleteStock(){
    this.api.deleteStock('firstFamily').subscribe(
      res => {
        console.log(res);
      }
    );
  }

}

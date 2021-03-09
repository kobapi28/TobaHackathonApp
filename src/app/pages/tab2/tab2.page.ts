import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { Stock } from '../../interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  stock: Stock = {link: 'https://twitter.com/shinukosub/status/1368835892148805633'};

  constructor(
    private api: ApiService,
    private toastCtrl: ToastController
  ) {}

  ionViewDidEnter(){
    // this.getStock();
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
        this.stock = res;
        this.deleteStockToast();
      }
    );
  }

  async deleteStockToast(){
    const toast = await this.toastCtrl.create({
      message: 'ストックを削除しました',
      duration: 2000
    });
    await toast.present();
  }

}

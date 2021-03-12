import { Component, OnInit, Input } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FoodListItem } from '../../interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss'],
})
export class FoodlistComponent implements OnInit {
  @Input() datas: FoodListItem[];

  constructor(
    private api: ApiService,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {}

  updateStock(twitterLink: string, twitterImage: string){
    this.api.updateStock(this.api.getFamilyId(), twitterLink, twitterImage).subscribe(
      res => {
        console.log(res);
        this.updateStockToast();
      }
    );
  }

  async updateStockToast(){
    const toast = await this.toastCtrl.create({
      message: 'ストックが完了しました',
      duration: 2000
    });
    await toast.present();
  }
}

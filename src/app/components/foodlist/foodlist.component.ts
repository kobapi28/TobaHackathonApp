import { Component, OnInit, Input } from '@angular/core';
import {FoodListItem} from '../../interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss'],
})
export class FoodlistComponent implements OnInit {
  @Input() datas: FoodListItem[];
  // datas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {}

  updateStock(twitterLink: string){
    this.api.updateStock('firstFamily', twitterLink).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}

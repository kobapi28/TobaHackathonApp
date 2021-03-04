import { Component, OnInit, Input } from '@angular/core';
import {FoodListItem} from '../../interface';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss'],
})
export class FoodlistComponent implements OnInit {
  @Input() datas: FoodListItem[];
  // datas = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor() { }

  ngOnInit() {}

}

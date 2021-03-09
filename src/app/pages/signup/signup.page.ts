import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  familyId = '';
  twitterId = '';

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  createFamilyRoom(){
    this.api.createFamilyRoom(this.familyId, this.twitterId).subscribe(
      res => {
        console.log(res);
      }
    );
  }

  // debug

  enterFamilyRoom(){
    this.api.enterFamilyRoom('firstFamily').subscribe(
      res => {
        console.log(res);
      }
    );
  }

  showUsers(){
    this.api.showUsers('firstFamily').subscribe(
      res => {
        console.log(res);
      }
    );
  }

  updateUser(){
    this.api.updateUser('firstFamily', 'shoma28_').subscribe(
      res => {
        console.log(res);
      }
    );
  }

  getFavorites(){
    this.api.getFavorites('firstFamily').subscribe(
      res => {
        console.log(res);
      }
    );
  }

  getStock(){
    this.api.getStock('firstFamily').subscribe(
      res => {
        console.log(res);
      }
    );
  }

  updateStock(){
    this.api.updateStock('firstFamily', 'https://twitter.com/subwayjp/status/1361601215994466304').subscribe(
      res => {
        console.log(res);
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

import { Component, OnInit } from '@angular/core';
import {NavController, AlertController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import {User} from '../../interface';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {
  users: User[] = [];

  constructor(
    private navCtrl: NavController,
    private api: ApiService,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.showUsers();
  }

  navigateBack(){
    this.navCtrl.navigateBack('/tabs/tab3');
  }

  showUsers(){
    this.api.showUsers('firstFamily').subscribe(
      res => {
        console.log(res);
        this.users = res;
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

  async inputAlert(){
    const alert = await this.alertCtrl.create({
      header: '追加するユーザのTwitterIDを入力してください',
      inputs: [
        {
          name: 'twitterID',
          type: 'text',
          placeholder: 'twitterID'
        }
      ],
      buttons: [
        {
          text: '追加する',
          handler: () => {
            this.updateUser();
          }
        }
      ]
    });

    await alert.present();
  }

}

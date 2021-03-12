import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
import { User } from '../../interface';

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
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
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
    this.api.showUsers(this.api.getFamilyId()).subscribe(
      res => {
        console.log(res);
        this.users = res;
      }
    );
  }

  updateUser(twitterId: string){
    this.api.updateUser(this.api.getFamilyId(), twitterId).subscribe(
      res => {
        console.log(res);
        this.users = res;
        this.updateUserToast();
      }
    );
  }

  deleteUser(twitterId: string){
    this.api.deleteUser(this.api.getFamilyId(), twitterId).subscribe(
      res => {
        console.log(res);
        this.users = res;
        this.updateUserToast();
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
          handler: data => {
            console.log(data.twitterID);
            this.updateUser(data.twitterID);
          }
        }
      ]
    });

    await alert.present();
  }

  async updateUserToast(){
    const toast = await this.toastCtrl.create({
      message: 'ユーザを更新しました',
      duration: 2000
    });
    await toast.present();
  }

}

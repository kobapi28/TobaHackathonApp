import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  familyId = '';

  constructor(
    private api: ApiService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  enterFamilyRoom(){
    this.api.enterFamilyRoom(this.familyId).subscribe(
      res => {
        console.log(res);
        this.api.setFamilyId(this.familyId);
        this.navCtrl.navigateForward('/tabs/tab1');
      }
    );
  }

  toSignUp(){
    this.navCtrl.navigateForward('/signup');
  }

}

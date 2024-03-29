import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  familyId = '';
  twitterId = '';

  constructor(
    private api: ApiService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  createFamilyRoom(){
    this.api.createFamilyRoom(this.familyId, this.twitterId).subscribe(
      res => {
        console.log(res);
        this.api.setFamilyId(this.familyId);
        this.navCtrl.navigateForward('/tabs/tab1');
      }
    );
  }

  toSignIn(){
    this.navCtrl.navigateForward('/signin');
  }
}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  constructor(
    private navCtrl: NavController,
    private api: ApiService
  ) {
  }

  toMembers(){
    this.navCtrl.navigateForward('/members');
  }

  logout(){
    this.api.setFamilyId('');
    this.navCtrl.navigateRoot('/signin');
  }

}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  familyId = '';

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
  }

  enterFamilyRoom(){
    this.api.enterFamilyRoom(this.familyId).subscribe(
      res => {
        console.log(res);
      }
    );
  }

}

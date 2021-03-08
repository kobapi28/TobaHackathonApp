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

}

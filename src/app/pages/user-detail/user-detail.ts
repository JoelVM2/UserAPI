import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { UserDetailComponent } from "../../components/user-detail-component/user-detail-component";

@Component({
  selector: 'app-user-detail',
  imports: [Header, UserDetailComponent],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {

}

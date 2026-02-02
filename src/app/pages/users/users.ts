import { Component } from '@angular/core';
import { UsersComponent } from "../../components/users-component/users-component";
import { Header } from "../../components/header/header";

@Component({
  selector: 'app-users',
  imports: [Header,UsersComponent],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

}

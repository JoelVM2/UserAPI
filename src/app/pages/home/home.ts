import { Component } from '@angular/core';
import { Header } from "../../components/header/header";
import { HomeComponent } from "../../components/home-component/home-component";

@Component({
  selector: 'app-home',
  imports: [Header, HomeComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}

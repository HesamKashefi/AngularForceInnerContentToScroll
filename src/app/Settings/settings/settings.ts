import { Component } from '@angular/core';
import { NavBar } from "../nav-bar/nav-bar";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-settings',
  imports: [NavBar, RouterOutlet],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class Settings {

}

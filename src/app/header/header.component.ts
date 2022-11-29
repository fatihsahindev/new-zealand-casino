import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  casinos: string[] = ['Mobile Casino', '21bit', 'Casino Rocket', 'Maneki Casino', 'Spin Samurai', 'Turbico Casino', 'NightRush Casino', 'Hyper Casino', 'Wild Fortune'];
  svgithub: string = "https://raw.githubusercontent.com/falovic/new-zealand-casino/master/src/assets/svg/";

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  svgithub: string = "https://raw.githubusercontent.com/falovic/new-zealand-casino/master/src/assets/svg/";

  constructor() { }

  ngOnInit(): void {
  }

}

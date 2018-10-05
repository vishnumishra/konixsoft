import { Component, OnInit } from '@angular/core';

declare var particlesJS: any;

@Component({
  selector: 'app-home-particle-banner',
  templateUrl: './home-particle-banner.component.html',
  styleUrls: ['./home-particle-banner.component.scss']
})
export class HomeParticleBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', '../../assets/particle.js/particles.json', null);
  }

}

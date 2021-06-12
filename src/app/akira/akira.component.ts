import { Component, OnInit } from '@angular/core';
import { Container, Main } from 'ng-particles';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { particles } from '../models/particles.model';

@Component({
  selector: 'app-akira',
  templateUrl: './akira.component.html',
  styleUrls: ['./akira.component.css']
})
export class AkiraComponent implements OnInit {

  constructor() { }

  id = "tsparticles";
  particles: object = new particles().particlesOptions;
  title: string = "Hello.";
  my: string = "My name's"
  name: string = "Jetniphan Pukkham.";
  github = faGithub;
  facebook = faFacebook;
  ig = faInstagram;


  ngOnInit(): void {
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);
  }

}

import { Component } from '@angular/core';
import { Container, Main } from 'ng-particles';
import { particles } from './models/particles.model';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id = "tsparticles";
  particles: object = new particles().particlesOptions;
  title: string = "Hello.";
  my: string = "My name's"
  name: string = "Jeniphan Pukkham.";
  github = faGithub;
  facebook = faFacebook;
  ig = faInstagram;


  ngOnInit(): void {
    console.log(this.particles);
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
  }
}


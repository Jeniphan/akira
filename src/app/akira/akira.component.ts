import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Container, Main } from 'ng-particles';
import { particles } from '../models/particles.model';

@Component({
  selector: 'app-akira',
  templateUrl: './akira.component.html',
  styleUrls: ['./akira.component.css']
})
export class AkiraComponent implements OnInit {

  metaData = {
    name: 'Jetniphan Pukkham - @All about me.',
    description: 'Hello my name is Jetniphan Pukkham. This all about for me.',
    image: 'assets/profile.png'
  }

  constructor(private titles: Title, private meta: Meta) { }
  title: string = "Hello.";
  my: string = "My name's"
  name: string = "Jetniphan Pukkham.";
  github = faGithub;
  facebook = faFacebook;
  ig = faInstagram;
  mode: boolean = true;
  _mode = new darkmode;


  ngOnInit(): void {
    this.titles.setTitle(this.metaData.name);
    this.meta.addTags([
      { name: 'og:type', content: 'article' },
      { name: 'og:url', content: '/home' },
      { name: 'og:title', content: this.metaData.name },
      { name: 'og:description', content: this.metaData.description },
      { name: 'og:image', content: this.metaData.image }
    ]);
  }

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  particlesInit(main: Main): void {
    console.log(main);
  }

  onMode() {
    this.mode = !this.mode;
    /*======================= This mode dark =====================*/
    if (this.mode) {
      this._mode = new darkmode
    }
    /*======================= This mode ligth =====================*/
    else {
      this._mode = new lightmode
    }
  }

}

export class lightmode {
  mode_icon: string = "moon-outline";
  bgClass = "main-ligth";
  iconClass = "ligth-icon";
  fontButtom = "button-light";
}

export class darkmode {
  mode_icon: string = "sunny-outline";
  bgClass = "main";
  iconClass = "dark-icon";
  fontButtom = "button";
}

import { Component, OnInit, } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { filter } from 'rxjs/operators';

declare let gtag: Function;

@Component({
  selector: 'app-akira',
  templateUrl: './akira.component.html',
  styleUrls: ['./akira.component.css']
})
export class AkiraComponent implements OnInit {

  metaData = {
    name: 'Jetniphan Pukkham - @All about me.',
    description: 'Hello my name is Jetniphan Pukkham. This all about for me.',
    image: 'profile.png'
  }

  constructor(
    private titles: Title,
    private meta: Meta,
    private router: Router
  ) { }
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
      { name: 'og:url', content: '' },
      { name: 'og:title', content: this.metaData.name },
      { name: 'og:description', content: this.metaData.description },
      { name: 'og:image', content: this.metaData.image }
    ]);
    this.setMode();
    this.setUpAnalytics();
  }

  setUpAnalytics() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(
        (event: NavigationEnd | any) => {
          gtag('config', 'G-EYYLDEQ6LY',
            {
              page_path: event.urlAfterRedirects
            }
          );
        });
  }

  setMode() {
    const Mode = localStorage.getItem('mode');
    if (Mode) {
      this.mode = (Mode === 'darkmode')
    }
    else {
      localStorage.setItem('mode', 'darkmode')
    }
    this.onMode()
  }

  clickmode() {
    this.mode = !this.mode;
    if (this.mode) {
      localStorage.setItem('mode', "darkmode")
    }
    else {
      localStorage.setItem('mode', "ligthmode")
    }
    this.onMode()
  }


  onMode() {
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

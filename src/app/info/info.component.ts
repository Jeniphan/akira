import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent implements OnInit {

  constructor() { }
  isOpen = true;
  mode: boolean = true;
  _mode = new darkmode;
  liststat: boolean = false;

  ngOnInit(): void {
    this.setMode();
  }

  Date: string = 'Aprill, 2018 - Present'
  university: string = `King Mongkut's University of Technology Thonburi`
  major: string = 'Electronic and Telecommunication Dept.'
  hightschool: string = 'Soemngam Witthayakhom School'
  majorschool: string = 'Sciences and Mathematics Program'

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

  onlist() {
    this.liststat = !this.liststat;
  }
}

export class lightmode {
  header = "header-light"
  mode_icon: string = "moon-outline";
  bgClass = "maindark";
  fontButtom = "button-light";
  listmenu = "list-menu-light";
  listmenu_font = "menu-font-light";
  footer = "footer-light";
}

export class darkmode {
  header = "header-dark"
  mode_icon: string = "sunny-outline";
  bgClass = "main";
  fontButtom = "button";
  listmenu = "list-menu-dark";
  listmenu_font = "menu-font-dark";
  footer = "footer-dark";
}

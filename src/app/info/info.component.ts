import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

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

  ngOnInit(): void {
  }

  Date: string = 'Aprill, 2018 - Present'
  university: string = `King Mongkut's University of Technology Thonburi`
  major: string = 'Electronic and Telecommunication Dept.'
  hightschool: string = 'Soemngam Witthayakhom School'
  majorschool: string = 'Sciences and Mathematics Program'


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

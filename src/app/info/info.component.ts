import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Date: string = 'Aprill, 2018 - Present'
  university: string = `King Mongkut's University of Technology Thonburi`
  major: string = 'Electronic and Telecommunication Dept.'
  hightschool: string = 'Soemngam Witthayakhom School'
  majorschool: string = 'Sciences and Mathematics Program'
}

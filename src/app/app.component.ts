import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
declare var gtag: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'analytics';
  mode: boolean = true;

  constructor(router: Router) {
    const navEndEvents = router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    );

    navEndEvents.subscribe((event: any) => {
      gtag('config', 'G-EYYLDEQ6LY', {
        'page_path': event.urlAfterRedirects
      });
    })
  }

  ngOnInit(): void {

  }
}


import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {
  ActivatedRoute, NavigationEnd,
  Router
} from '@angular/router';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private titleService: Title, private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    // change site title when route path change
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .map(route => route.snapshot.data.title)
      .subscribe(stateTitle => this.titleService.setTitle(stateTitle));
  }
}

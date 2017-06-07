import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRouteSnapshot,
  UrlSegment
} from '@angular/router';

interface Breadcrumb {
  name: string;
  url: string;
}

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbs: Breadcrumb[];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.breadcrumbs = [];
      this.parseRoute(this.router.routerState.snapshot.root);
    });
  }

  parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['breadcrumb'] && node.url.length) {
      console.log(node.data['breadcrumb'], node);
      let urlSegments: UrlSegment[] = [];
      node.pathFromRoot.forEach(routerState => {
        urlSegments = urlSegments.concat(routerState.url);
      });

      const url = urlSegments.map(urlSegment => {
        return urlSegment.path;
      }).join('/');

      this.breadcrumbs.push({
        name: node.data['breadcrumb'],
        url: '/' + url
      });
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }
  }

}

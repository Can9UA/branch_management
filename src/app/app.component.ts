import { Component, OnInit } from '@angular/core';
import { ServerDataService } from './services/server-data.service'; // TODO temporary

import { Branch } from './shared/branch.interface'; // TODO temporary

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { // TODO temporary: implements OnInit
  branches: Branch[];

  constructor(private serverDataService: ServerDataService) {
  }

  ngOnInit() {
    this.serverDataService.getBranches()
      .subscribe(branches => {
        this.branches = branches;
        console.log(this.branches);
      });
  }
}

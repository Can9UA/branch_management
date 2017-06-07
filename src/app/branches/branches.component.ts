import { Component, OnInit } from '@angular/core';
import { ServerDataService } from '../services/server-data.service';

import { Branch } from '../shared/branch.interface';

@Component({
  selector: 'branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  branches: Branch[];

  constructor(private serverDataService: ServerDataService) { }

  ngOnInit() {
    this.serverDataService.getBranches()
      .subscribe(branches => {
        this.branches = branches;
      });
  }

}

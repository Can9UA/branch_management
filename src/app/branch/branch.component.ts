import { Component, Input, OnInit } from '@angular/core';

import { Branch } from '../shared/branch.interface';

@Component({
  selector: 'branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {
  @Input() branch: Branch;

  constructor() {
  }

  ngOnInit() {
  }

}

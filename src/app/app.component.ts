import { Component, OnInit } from '@angular/core';
import { ServerDataService } from './services/server-data.service'; // TODO temporary

import { Branch } from './shared/branch.interface'; // TODO temporary
import { Employee } from './shared/employee.interface'; // TODO temporary

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit { // TODO temporary: implements OnInit
  branches: Branch[];
  employees: Employee[];

  constructor(private serverDataService: ServerDataService) {
  }

  ngOnInit() {
    this.serverDataService.getBranches()
      .subscribe(branches => {
        this.branches = branches;
      });

    // get branches by id
    // this.serverDataService.getBranches(2)
    //   .subscribe(branches => {
    //     console.log(branches);
    //   });

    this.serverDataService.getEmployees()
      .subscribe(employees => {
        this.employees = employees;
      });
  }
}

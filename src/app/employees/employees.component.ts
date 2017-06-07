import { Component, OnInit } from '@angular/core';

import { Employee } from '../shared/employee.interface';
import { ServerDataService } from 'app/services/server-data.service';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];

  constructor(private serverDataService: ServerDataService) { }

  ngOnInit() {
    this.serverDataService.getEmployees()
      .subscribe(employees => {
        this.employees = employees;
      });
  }

}

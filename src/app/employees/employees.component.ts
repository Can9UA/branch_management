import { Component, OnInit } from '@angular/core';

import { Employee } from '../shared/employee.interface';
import { ServerDataService } from 'app/services/server-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees: Observable<Array<Employee>>;
  // employees: Employee[];

  constructor(private serverDataService: ServerDataService) { }

  ngOnInit() {
    this.employees = this.serverDataService.getEmployees();
      // .subscribe(employees => {
      //   this.employees = employees;
      // });
  }

}

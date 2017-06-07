import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {
  Http,
  Headers,
  RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Error } from 'tslint/lib/error';

import { Branch } from '../shared/branch.interface';
import { Employee } from '../shared/employee.interface';

@Injectable()
export class ServerDataService {

  branches: Branch[];
  employee: Employee[];

  constructor(private http: Http) { }

  getBranches(branchIndex: string | number = ''): Observable<Branch[]> {
    const request = environment.branches + branchIndex;

    return this.http.get(request)
        .map(res => {
          return res.json();
        })
        .map(branches => this.branches = branches)
        .catch(this.handleError);
  }

  getEmployees(employeeIndex: string | number = ''): Observable<Employee[]> {
    const request = environment.employees + employeeIndex;

    return this.http.get(request)
      .map(res => {
        return res.json();
      })
      .map(employees => this.employee = employees)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(new Error());
  }
}

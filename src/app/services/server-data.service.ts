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

@Injectable()
export class ServerDataService {
  private urls = {
    base: 'http://localhost:3000/',
    branches: 'http://localhost:3000/branches',
    employees: 'http://localhost:3000/employees'
  };

  branches: Branch[];

  constructor(private http: Http) { }

  getBranches(): Observable<Branch[]> {
    return this.http.get(this.urls.branches)
      .map(res => {
        return res.json();
      })
      .map(branches => this.branches = branches)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw(new Error());
  }
}

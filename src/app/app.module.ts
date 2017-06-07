import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerDataService } from './services/server-data.service';
import { BranchComponent } from './branch/branch.component';
import { EmployeeComponent } from './employee/employee.component';

import { RouterModule } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { EmployeesComponent } from './employees/employees.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    EmployeeComponent,
    BranchComponent,
    BranchesComponent,
    EmployeesComponent,
    BreadcrumbComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([{
      path: 'branches',
      component: BranchesComponent,
      data: { breadcrumb: 'Branches' }
    }, {
      path: 'employees',
      component: EmployeesComponent,
      data: { breadcrumb: 'Employees' }
    }, {
      path: '',
      component: HomeComponent,
      data: { breadcrumb: 'Home' }
    }])
  ],
  providers: [ServerDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

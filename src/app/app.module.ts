import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerDataService } from './services/server-data.service';
import { BranchComponent } from './branch/branch.component';
import { EmployeeComponent } from './employee/employee.component';

import { BranchesComponent } from './branches/branches.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { Routing } from 'app/app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    EmployeeComponent,
    BranchesComponent,
    EmployeesComponent,
    BreadcrumbComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [ServerDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

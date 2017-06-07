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

@NgModule({
  declarations: [
    AppComponent,
    BranchComponent,
    EmployeeComponent,
    BranchComponent,
    BranchesComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'branches', component: BranchesComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: '', redirectTo: 'branches', pathMatch: 'full' }
    ])
  ],
  providers: [ServerDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

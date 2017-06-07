import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchesComponent } from './branches/branches.component';
import { EmployeesComponent } from './employees/employees.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
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
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { EmployeeModel } from '../../../NorthwindModel/employee.model';
import { EmployeeCollection } from '../../../NorthwindModel/employee.collection';
import { Employee } from '../../../NorthwindModel/employee.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class EmployeesService extends ODataEntitySetService<Employee> {
  constructor(client: ODataClient) {
    super(client, 'Employees', 'NorthwindModel.Employee');
  }
  employeeModel(entity?: Partial<Employee>) {
    return this.model<EmployeeModel<Employee>>(entity);
  }
  employeeCollection(entities?: Partial<Employee>[]) {
    return this.collection<EmployeeModel<Employee>, EmployeeCollection<Employee, EmployeeModel<Employee>>>(entities);
  }
// #region Custom
// #endregion Custom
}

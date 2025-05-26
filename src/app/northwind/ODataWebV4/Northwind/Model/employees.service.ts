import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Employee } from '../../../NorthwindModel/employee.entity';

@Injectable()
export class EmployeesService extends ODataEntitySetService<Employee> {
  constructor(client: ODataClient) {
    super(client, 'Employees', 'NorthwindModel.Employee');
  }
  employeeModel(entity?: Partial<Employee>) {
    return this.model(entity);
  }
  employeeCollection(entities?: Partial<Employee>[]) {
    return this.collection(entities);
  }
}

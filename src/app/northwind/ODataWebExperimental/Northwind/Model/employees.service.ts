import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Employee } from '../../../NorthwindModel/employee.entity';
import { Order } from '../../../NorthwindModel/order.entity';
import { Territory } from '../../../NorthwindModel/territory.entity';
import { EmployeeModel } from '../../../NorthwindModel/employee.model';
import { OrderModel } from '../../../NorthwindModel/order.model';
import { TerritoryModel } from '../../../NorthwindModel/territory.model';
import { EmployeeCollection } from '../../../NorthwindModel/employee.collection';
import { OrderCollection } from '../../../NorthwindModel/order.collection';
import { TerritoryCollection } from '../../../NorthwindModel/territory.collection';
//#endregion

@Injectable()
export class EmployeesService extends ODataEntityService<Employee> {
  constructor(protected client: ODataClient) {
    super(client, 'Employees', 'NorthwindModel.Employee');
  }

  employeeModel(): EmployeeModel<Employee> {
    return super.model() as EmployeeModel<Employee>;
  }
  
  employeeCollection(): EmployeeCollection<Employee, EmployeeModel<Employee>> {
    return super.collection() as EmployeeCollection<Employee, EmployeeModel<Employee>>;
  }
}

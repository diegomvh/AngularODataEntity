import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntitySetService, 
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
export class EmployeesService extends ODataEntitySetService<Employee> {
  constructor(protected client: ODataClient) {
    super(client, 'Employees', 'NorthwindModel.Employee');
  }

  //#region ODataApi Model
  employeeModel(attrs?: Partial<Employee>): EmployeeModel<Employee> {
    return this.entity().asModel<EmployeeModel<Employee>>(attrs || {});
  }
  //#endregion
  //#region ODataApi Collection
  employeeCollection(models?: Partial<Employee>[]): EmployeeCollection<Employee, EmployeeModel<Employee>> {
    return this.entities().asCollection<EmployeeModel<Employee>, EmployeeCollection<Employee, EmployeeModel<Employee>>>(models || []);
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public employees1(entity: EntityKey<Employee>): ODataNavigationPropertyResource<Employee> {
    return this.entity(entity).navigationProperty<Employee>('Employees1');
  }
  public employee1(entity: EntityKey<Employee>): ODataNavigationPropertyResource<Employee> {
    return this.entity(entity).navigationProperty<Employee>('Employee1');
  }
  public orders(entity: EntityKey<Employee>): ODataNavigationPropertyResource<Order> {
    return this.entity(entity).navigationProperty<Order>('Orders');
  }
  public territories(entity: EntityKey<Employee>): ODataNavigationPropertyResource<Territory> {
    return this.entity(entity).navigationProperty<Territory>('Territories');
  }
  //#endregion
}

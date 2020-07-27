import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataEntityService, 
  ODataEntityAnnotations, 
  ODataEntitiesAnnotations, 
  ODataPropertyAnnotations, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Employee } from '../../../NorthwindModel/employee.entity';
import { Order } from '../../../NorthwindModel/order.entity';
import { Territory } from '../../../NorthwindModel/territory.entity';
//#endregion

@Injectable()
export class EmployeesService extends ODataEntityService<Employee> {
  static path: string = 'Employees';
  static type: string = 'ODataWebExperimental.Northwind.Model.Employees';
  static entityType: string = 'NorthwindModel.Employee';

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

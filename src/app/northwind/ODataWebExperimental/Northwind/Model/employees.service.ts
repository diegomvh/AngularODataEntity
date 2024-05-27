import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
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
  ODataOptions,
  ODataQueryArgumentsOptions,
  ODataFunctionOptions,
  ODataActionOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
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
  constructor(client: ODataClient) {
    super(client, 'Employees', 'NorthwindModel.Employee');
  }
  //#region ODataApiGen Model
  employeeModel(attrs?: Partial<Employee>): EmployeeModel<Employee> {
    return this.entity().asModel<EmployeeModel<Employee>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  employeeCollection(models?: Partial<Employee>[]): EmployeeCollection<Employee, EmployeeModel<Employee>> {
    return this.entities().asCollection<EmployeeModel<Employee>, EmployeeCollection<Employee, EmployeeModel<Employee>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public employees1(key: EntityKey<Employee>): ODataNavigationPropertyResource<Employee> { 
    return this.entity(key).navigationProperty<Employee>('Employees1'); 
  }
  public fetchEmployees1(key: EntityKey<Employee>, options?: ODataQueryArgumentsOptions<Employee>) {
    return this.fetchNavigationProperty<Employee>(
      this.employees1(key), 
      'entities', options) as Observable<ODataEntities<Employee>>;
  }
  public addEmployeeToEmployees1(key: EntityKey<Employee>, target: ODataEntityResource<ODataEntities<Employee>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.employees1(key).reference()
      .add(target);
  }
  public removeEmployeeFromEmployees1(key: EntityKey<Employee>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Employee>>, etag?: string} = {}): Observable<any> {
    return this.employees1(key).reference()
      .remove(target);
  }
  public employee1(key: EntityKey<Employee>): ODataNavigationPropertyResource<Employee> { 
    return this.entity(key).navigationProperty<Employee>('Employee1'); 
  }
  public fetchEmployee1(key: EntityKey<Employee>, options?: ODataQueryArgumentsOptions<Employee>) {
    return this.fetchNavigationProperty<Employee>(
      this.employee1(key), 
      'entity', options) as Observable<ODataEntity<Employee>>;
  }
  public setEmployeeAsEmployee1(key: EntityKey<Employee>, target: ODataEntityResource<ODataEntity<Employee>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.employee1(key).reference()
      .set(target, {etag});
  }
  public unsetEmployeeAsEmployee1(key: EntityKey<Employee>, {target, etag}: {target?: ODataEntityResource<ODataEntity<Employee>>, etag?: string} = {}): Observable<any> {
    return this.employee1(key).reference()
      .unset({etag});
  }
  public orders(key: EntityKey<Employee>): ODataNavigationPropertyResource<Order> { 
    return this.entity(key).navigationProperty<Order>('Orders'); 
  }
  public fetchOrders(key: EntityKey<Employee>, options?: ODataQueryArgumentsOptions<Order>) {
    return this.fetchNavigationProperty<Order>(
      this.orders(key), 
      'entities', options) as Observable<ODataEntities<Order>>;
  }
  public addOrderToOrders(key: EntityKey<Employee>, target: ODataEntityResource<ODataEntities<Order>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.orders(key).reference()
      .add(target);
  }
  public removeOrderFromOrders(key: EntityKey<Employee>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Order>>, etag?: string} = {}): Observable<any> {
    return this.orders(key).reference()
      .remove(target);
  }
  public territories(key: EntityKey<Employee>): ODataNavigationPropertyResource<Territory> { 
    return this.entity(key).navigationProperty<Territory>('Territories'); 
  }
  public fetchTerritories(key: EntityKey<Employee>, options?: ODataQueryArgumentsOptions<Territory>) {
    return this.fetchNavigationProperty<Territory>(
      this.territories(key), 
      'entities', options) as Observable<ODataEntities<Territory>>;
  }
  public addTerritoryToTerritories(key: EntityKey<Employee>, target: ODataEntityResource<ODataEntities<Territory>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.territories(key).reference()
      .add(target);
  }
  public removeTerritoryFromTerritories(key: EntityKey<Employee>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Territory>>, etag?: string} = {}): Observable<any> {
    return this.territories(key).reference()
      .remove(target);
  }
  //#endregion
}

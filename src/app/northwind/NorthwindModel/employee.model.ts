import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Employee } from './employee.entity';
import { Order } from './order.entity';
import { Territory } from './territory.entity';
import { OrderModel } from './order.model';
import { TerritoryModel } from './territory.model';
import { EmployeeCollection } from './employee.collection';
import { OrderCollection } from './order.collection';
import { TerritoryCollection } from './territory.collection';
//#endregion

export class EmployeeModel<E extends Employee> extends ODataModel<E> {
  //#region ODataApi Properties
  employeeID: number;
  lastName: string;
  firstName: string;
  title?: string;
  titleOfCourtesy?: string;
  birthDate?: Date;
  hireDate?: Date;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  homePhone?: string;
  extension?: string;
  photo?: ArrayBuffer;
  notes?: string;
  reportsTo?: number;
  photoPath?: string;
  employees1?: EmployeeCollection<Employee, EmployeeModel<Employee>>;
  employee1?: EmployeeModel<Employee>;
  orders?: OrderCollection<Order, OrderModel<Order>>;
  territories?: TerritoryCollection<Territory, TerritoryModel<Territory>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public setEmployee1(model: EmployeeModel<Employee> | null): Observable<this> {
    return this.setNavigationProperty<Employee, EmployeeModel<Employee>>('Employee1', model);
  }
  //#endregion
}
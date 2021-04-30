import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
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
  EmployeeID!: number;
  LastName!: string;
  FirstName!: string;
  Title?: string;
  TitleOfCourtesy?: string;
  BirthDate?: Date;
  HireDate?: Date;
  Address?: string;
  City?: string;
  Region?: string;
  PostalCode?: string;
  Country?: string;
  HomePhone?: string;
  Extension?: string;
  Photo?: ArrayBuffer;
  Notes?: string;
  ReportsTo?: number;
  PhotoPath?: string;
  Employees1?: EmployeeCollection<Employee, EmployeeModel<Employee>>;
  Employee1?: EmployeeModel<Employee>;
  Orders?: OrderCollection<Order, OrderModel<Order>>;
  Territories?: TerritoryCollection<Territory, TerritoryModel<Territory>>;
  //#endregion
  //#region ODataApi Setters
  public setEmployee1(model: EmployeeModel<Employee> | null, options?: HttpOptions) {
    return this.setReference<Employee>('Employee1', model, options);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}

import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

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

@Model()
export class EmployeeModel<E extends Employee> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  EmployeeID!: number;
  
  
  @ModelField()
  LastName!: string;
  
  
  @ModelField()
  FirstName!: string;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  TitleOfCourtesy?: string;
  
  
  @ModelField()
  BirthDate?: Date;
  
  
  @ModelField()
  HireDate?: Date;
  
  
  @ModelField()
  Address?: string;
  
  
  @ModelField()
  City?: string;
  
  
  @ModelField()
  Region?: string;
  
  
  @ModelField()
  PostalCode?: string;
  
  
  @ModelField()
  Country?: string;
  
  
  @ModelField()
  HomePhone?: string;
  
  
  @ModelField()
  Extension?: string;
  
  
  @ModelField()
  Photo?: ArrayBuffer;
  
  
  @ModelField()
  Notes?: string;
  
  
  @ModelField()
  ReportsTo?: number;
  
  
  @ModelField()
  PhotoPath?: string;
  
  
  @ModelField()
  Employees1?: EmployeeCollection<Employee, EmployeeModel<Employee>>;
  
  
  @ModelField()
  Employee1?: EmployeeModel<Employee>;
  public getEmployee1({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Employee>('Employee1', {asEntity, ...options}) as Observable<EmployeeModel<Employee>>;
  }
  public setEmployee1(model: EmployeeModel<Employee> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Employee>('Employee1', model, {asEntity, ...options});
  }
  @ModelField()
  Orders?: OrderCollection<Order, OrderModel<Order>>;
  
  
  @ModelField()
  Territories?: TerritoryCollection<Territory, TerritoryModel<Territory>>;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
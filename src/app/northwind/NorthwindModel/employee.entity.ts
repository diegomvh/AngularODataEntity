//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Order } from './order.entity';
import { Territory } from './territory.entity';
import { EmployeeModel } from './employee.model';
import { OrderModel } from './order.model';
import { TerritoryModel } from './territory.model';
import { EmployeeCollection } from './employee.collection';
import { OrderCollection } from './order.collection';
import { TerritoryCollection } from './territory.collection';
//#endregion

//#region ODataApiGen Type
export const EmployeeType = 'NorthwindModel.Employee';//#endregion
export interface Employee {
  //#region ODataApiGen Properties
  EmployeeID: number;
  LastName: string;
  FirstName: string;
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
  Employees1?: Employee[];
  Employee1?: Employee;
  Orders?: Order[];
  Territories?: Territory[];
  //#endregion
}
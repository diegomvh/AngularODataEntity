import { Duration } from 'angular-odata';

import { Order } from './order.entity';
import { Territory } from './territory.entity';

export const EmployeeEntityType = 'NorthwindModel.Employee';
export interface Employee {
  EmployeeID: number;
  LastName: string;
  FirstName: string;
  Title: string;
  TitleOfCourtesy: string;
  BirthDate: Date;
  HireDate: Date;
  Address: string;
  City: string;
  Region: string;
  PostalCode: string;
  Country: string;
  HomePhone: string;
  Extension: string;
  Photo: ArrayBuffer;
  Notes: string;
  ReportsTo: number;
  PhotoPath: string;
  Employees1?: Employee[];
  Employee1?: Employee;
  Orders?: Order[];
  Territories?: Territory[];
}

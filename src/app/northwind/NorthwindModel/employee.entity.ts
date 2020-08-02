import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Order } from './order.entity';
import { Territory } from './territory.entity';
import { EmployeeModel } from './employee.model';
import { OrderModel } from './order.model';
import { TerritoryModel } from './territory.model';
import { EmployeeCollection } from './employee.collection';
import { OrderCollection } from './order.collection';
import { TerritoryCollection } from './territory.collection';
//#endregion

export interface Employee {
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
  employees1?: Employee[];
  employee1?: Employee;
  orders?: Order[];
  territories?: Territory[];
  //#endregion
}
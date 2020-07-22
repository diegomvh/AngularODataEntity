import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CustomerDemographic } from './customerdemographic.entity';
import { Order } from './order.entity';
//#endregion

export interface Customer {
  //#region ODataApi Properties
  CustomerID: string;
  CompanyName: string;
  ContactName?: string;
  ContactTitle?: string;
  Address?: string;
  City?: string;
  Region?: string;
  PostalCode?: string;
  Country?: string;
  Phone?: string;
  Fax?: string;
  Orders?: Order[];
  CustomerDemographics?: CustomerDemographic[];
  //#endregion
}
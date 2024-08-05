//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CustomerDemographic } from './customer-demographic.entity';
import { Order } from './order.entity';
import { CustomerDemographicModel } from './customer-demographic.model';
import { OrderModel } from './order.model';
import { CustomerDemographicCollection } from './customer-demographic.collection';
import { OrderCollection } from './order.collection';
//#endregion

//#region ODataApiGen Type
export const CustomerType = 'NorthwindModel.Customer';//#endregion
export interface Customer {
  //#region ODataApiGen Properties
  CustomerID: string;
  CompanyName?: string;
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
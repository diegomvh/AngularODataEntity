﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CustomerDemographic } from './customerdemographic.entity';
import { Order } from './order.entity';
import { CustomerDemographicModel } from './customerdemographic.model';
import { OrderModel } from './order.model';
import { CustomerDemographicCollection } from './customerdemographic.collection';
import { OrderCollection } from './order.collection';
//#endregion

export interface Customer {
  //#region ODataApiGen Properties
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
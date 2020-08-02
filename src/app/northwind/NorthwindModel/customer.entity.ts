import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { CustomerDemographic } from './customerdemographic.entity';
import { Order } from './order.entity';
import { CustomerDemographicModel } from './customerdemographic.model';
import { OrderModel } from './order.model';
import { CustomerDemographicCollection } from './customerdemographic.collection';
import { OrderCollection } from './order.collection';
//#endregion

export interface Customer {
  //#region ODataApi Properties
  customerID: string;
  companyName: string;
  contactName?: string;
  contactTitle?: string;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  phone?: string;
  fax?: string;
  orders?: Order[];
  customerDemographics?: CustomerDemographic[];
  //#endregion
}
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerCollection } from './customer.collection';
//#endregion

export const CustomerConfig = {
  name: "Customer",
  base: "ODataDemo.Person",
  model: CustomerModel,
  collection: CustomerCollection,
  annotations: [],
  fields: {
    TotalExpense: {type: 'Edm.Decimal', nullable: false}
  }
} as EntityConfig<Customer>;
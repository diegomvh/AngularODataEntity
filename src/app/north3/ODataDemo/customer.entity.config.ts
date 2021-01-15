import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerCollection } from './customer.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const CustomerConfig = {
  name: "Customer",
  base: "ODataDemo.Person",
  model: CustomerModel,
  collection: CustomerCollection,
  annotations: [],
  fields: {
    TotalExpense: {type: 'Edm.Decimal', nullable: false}
  }
} as StructuredTypeConfig<Customer>;
//#endregion
//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerCollection } from './customer.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const CustomerEntityConfig = {
  name: "Customer",
  base: "ODataDemo.Person",
  model: CustomerModel,
  collection: CustomerCollection,
  fields: {
    TotalExpense: {type: 'Edm.Decimal', nullable: false}
  }
} as StructuredTypeConfig<Customer>;
//#endregion
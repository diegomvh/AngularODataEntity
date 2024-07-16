//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CustomerDemographic } from './customer-demographic.entity';
import { CustomerDemographicModel } from './customer-demographic.model';
import { CustomerDemographicCollection } from './customer-demographic.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CustomerDemographicEntityConfig = {
  name: 'CustomerDemographic',
  model: CustomerDemographicModel,
  collection: CustomerDemographicCollection,
  keys: [{name: 'CustomerTypeID'}],
  fields: {
    CustomerTypeID: {type: 'Edm.String', nullable: false, maxLength: 10},
    CustomerDesc: {type: 'Edm.String'},
    Customers: {type: 'NorthwindModel.Customer', collection: true, navigation: true}
  }
} as StructuredTypeConfig<CustomerDemographic>;
//#endregion
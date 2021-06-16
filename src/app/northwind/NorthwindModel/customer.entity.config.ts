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
  model: CustomerModel,
  collection: CustomerCollection,
  keys: [{name: 'CustomerID'}],
  fields: {
    CustomerID: {type: 'Edm.String', nullable: false, maxLength: 5},
    CompanyName: {type: 'Edm.String', nullable: false, maxLength: 40},
    ContactName: {type: 'Edm.String', maxLength: 30},
    ContactTitle: {type: 'Edm.String', maxLength: 30},
    Address: {type: 'Edm.String', maxLength: 60},
    City: {type: 'Edm.String', maxLength: 15},
    Region: {type: 'Edm.String', maxLength: 15},
    PostalCode: {type: 'Edm.String', maxLength: 10},
    Country: {type: 'Edm.String', maxLength: 15},
    Phone: {type: 'Edm.String', maxLength: 24},
    Fax: {type: 'Edm.String', maxLength: 24},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true},
    CustomerDemographics: {type: 'NorthwindModel.CustomerDemographic', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Customer>;
//#endregion
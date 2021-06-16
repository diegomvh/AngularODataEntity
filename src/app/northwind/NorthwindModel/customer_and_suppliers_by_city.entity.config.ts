//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { CustomerAndSuppliersByCity } from './customer_and_suppliers_by_city.entity';
import { CustomerAndSuppliersByCityModel } from './customer_and_suppliers_by_city.model';
import { CustomerAndSuppliersByCityCollection } from './customer_and_suppliers_by_city.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const CustomerAndSuppliersByCityEntityConfig = {
  name: "Customer_and_Suppliers_by_City",
  model: CustomerAndSuppliersByCityModel,
  collection: CustomerAndSuppliersByCityCollection,
  keys: [{name: 'CompanyName'},{name: 'Relationship'}],
  fields: {
    City: {type: 'Edm.String', maxLength: 15},
    CompanyName: {type: 'Edm.String', nullable: false, maxLength: 40},
    ContactName: {type: 'Edm.String', maxLength: 30},
    Relationship: {type: 'Edm.String', nullable: false, maxLength: 9}
  }
} as StructuredTypeConfig<CustomerAndSuppliersByCity>;
//#endregion
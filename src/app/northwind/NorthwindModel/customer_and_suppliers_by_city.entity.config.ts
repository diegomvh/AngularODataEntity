import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Customer_and_Suppliers_by_City } from './customer_and_suppliers_by_city.entity';
//#endregion

export const Customer_and_Suppliers_by_CityConfig = {
  name: "Customer_and_Suppliers_by_City",
  annotations: [],
  fields: {
    City: {type: 'string', maxLength: 15},
    CompanyName: {type: 'string', key: true, ref: 'CompanyName', nullable: false, maxLength: 40},
    ContactName: {type: 'string', maxLength: 30},
    Relationship: {type: 'string', key: true, ref: 'Relationship', nullable: false, maxLength: 9}
  }
} as EntityConfig<Customer_and_Suppliers_by_City>;
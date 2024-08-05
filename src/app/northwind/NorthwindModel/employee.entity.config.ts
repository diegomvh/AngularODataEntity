//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Employee } from './employee.entity';
import { EmployeeModel } from './employee.model';
import { EmployeeCollection } from './employee.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const EmployeeEntityConfig = {
  name: 'Employee',
  model: EmployeeModel,
  collection: EmployeeCollection,
  keys: [{name: 'EmployeeID'}],
  fields: {
    EmployeeID: {type: 'Edm.Int32', nullable: false},
    LastName: {type: 'Edm.String'},
    FirstName: {type: 'Edm.String'},
    Title: {type: 'Edm.String'},
    TitleOfCourtesy: {type: 'Edm.String'},
    BirthDate: {type: 'Edm.DateTimeOffset'},
    HireDate: {type: 'Edm.DateTimeOffset'},
    Address: {type: 'Edm.String'},
    City: {type: 'Edm.String'},
    Region: {type: 'Edm.String'},
    PostalCode: {type: 'Edm.String'},
    Country: {type: 'Edm.String'},
    HomePhone: {type: 'Edm.String'},
    Extension: {type: 'Edm.String'},
    Photo: {type: 'Edm.Binary'},
    Notes: {type: 'Edm.String'},
    ReportsTo: {type: 'Edm.Int32'},
    PhotoPath: {type: 'Edm.String'},
    Employees1: {type: 'NorthwindModel.Employee', collection: true, navigation: true},
    Employee1: {type: 'NorthwindModel.Employee', navigation: true},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true},
    Territories: {type: 'NorthwindModel.Territory', collection: true, navigation: true}
  }
} as StructuredTypeConfig;
//#endregion
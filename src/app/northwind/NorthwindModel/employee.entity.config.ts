import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Employee } from './employee.entity';
import { EmployeeModel } from './employee.model';
import { EmployeeCollection } from './employee.collection';
//#endregion

export const EmployeeConfig = {
  name: "Employee",
  model: EmployeeModel,
  collection: EmployeeCollection,
  annotations: [],
  fields: {
    EmployeeID: {type: 'Edm.Int32', key: true, ref: 'EmployeeID', nullable: false},
    LastName: {type: 'Edm.String', nullable: false, maxLength: 20},
    FirstName: {type: 'Edm.String', nullable: false, maxLength: 10},
    Title: {type: 'Edm.String', maxLength: 30},
    TitleOfCourtesy: {type: 'Edm.String', maxLength: 25},
    BirthDate: {type: 'Edm.DateTimeOffset'},
    HireDate: {type: 'Edm.DateTimeOffset'},
    Address: {type: 'Edm.String', maxLength: 60},
    City: {type: 'Edm.String', maxLength: 15},
    Region: {type: 'Edm.String', maxLength: 15},
    PostalCode: {type: 'Edm.String', maxLength: 10},
    Country: {type: 'Edm.String', maxLength: 15},
    HomePhone: {type: 'Edm.String', maxLength: 24},
    Extension: {type: 'Edm.String', maxLength: 4},
    Photo: {type: 'Edm.Binary'},
    Notes: {type: 'Edm.String'},
    ReportsTo: {type: 'Edm.Int32'},
    PhotoPath: {type: 'Edm.String', maxLength: 255},
    Employees1: {type: 'NorthwindModel.Employee', collection: true, navigation: true},
    Employee1: {type: 'NorthwindModel.Employee', navigation: true, field: 'ReportsTo', ref: 'EmployeeID'},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true},
    Territories: {type: 'NorthwindModel.Territory', collection: true, navigation: true}
  }
} as EntityConfig<Employee>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Employee } from './employee.entity';
//#endregion

export const EmployeeConfig = {
  name: "Employee",
  annotations: [],
  fields: {
    EmployeeID: {type: 'number', key: true, ref: 'EmployeeID', nullable: false},
    LastName: {type: 'string', nullable: false, maxLength: 20},
    FirstName: {type: 'string', nullable: false, maxLength: 10},
    Title: {type: 'string', maxLength: 30},
    TitleOfCourtesy: {type: 'string', maxLength: 25},
    BirthDate: {type: 'Date'},
    HireDate: {type: 'Date'},
    Address: {type: 'string', maxLength: 60},
    City: {type: 'string', maxLength: 15},
    Region: {type: 'string', maxLength: 15},
    PostalCode: {type: 'string', maxLength: 10},
    Country: {type: 'string', maxLength: 15},
    HomePhone: {type: 'string', maxLength: 24},
    Extension: {type: 'string', maxLength: 4},
    Photo: {type: 'string'},
    Notes: {type: 'string'},
    ReportsTo: {type: 'number'},
    PhotoPath: {type: 'string', maxLength: 255},
    Employees1: {type: 'NorthwindModel.Employee', collection: true, navigation: true},
    Employee1: {type: 'NorthwindModel.Employee', navigation: true, field: 'ReportsTo', ref: 'EmployeeID'},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true},
    Territories: {type: 'NorthwindModel.Territory', collection: true, navigation: true}
  }
} as EntityConfig<Employee>;
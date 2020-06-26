import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Employee } from './employee.entity';
//#endregion

export const EmployeeConfig = {
  name: "Employee",
  annotations: [],
  fields: {
    EmployeeID: {type: 'Number', key: true, ref: 'EmployeeID', nullable: false},
    LastName: {type: 'String', nullable: false, maxLength: 20},
    FirstName: {type: 'String', nullable: false, maxLength: 10},
    Title: {type: 'String', maxLength: 30},
    TitleOfCourtesy: {type: 'String', maxLength: 25},
    BirthDate: {type: 'Date'},
    HireDate: {type: 'Date'},
    Address: {type: 'String', maxLength: 60},
    City: {type: 'String', maxLength: 15},
    Region: {type: 'String', maxLength: 15},
    PostalCode: {type: 'String', maxLength: 10},
    Country: {type: 'String', maxLength: 15},
    HomePhone: {type: 'String', maxLength: 24},
    Extension: {type: 'String', maxLength: 4},
    Photo: {type: 'String'},
    Notes: {type: 'String'},
    ReportsTo: {type: 'Number'},
    PhotoPath: {type: 'String', maxLength: 255},
    Employees1: {type: 'NorthwindModel.Employee', collection: true, navigation: true},
    Employee1: {type: 'NorthwindModel.Employee', navigation: true, field: 'ReportsTo', ref: 'EmployeeID'},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true},
    Territories: {type: 'NorthwindModel.Territory', collection: true, navigation: true}
  }
} as EntityConfig<Employee>;
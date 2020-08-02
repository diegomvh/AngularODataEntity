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
    employeeID: {name: 'EmployeeID', type: 'Edm.Int32', key: true, ref: 'employeeID', nullable: false},
    lastName: {name: 'LastName', type: 'Edm.String', nullable: false, maxLength: 20},
    firstName: {name: 'FirstName', type: 'Edm.String', nullable: false, maxLength: 10},
    title: {name: 'Title', type: 'Edm.String', maxLength: 30},
    titleOfCourtesy: {name: 'TitleOfCourtesy', type: 'Edm.String', maxLength: 25},
    birthDate: {name: 'BirthDate', type: 'Edm.DateTimeOffset'},
    hireDate: {name: 'HireDate', type: 'Edm.DateTimeOffset'},
    address: {name: 'Address', type: 'Edm.String', maxLength: 60},
    city: {name: 'City', type: 'Edm.String', maxLength: 15},
    region: {name: 'Region', type: 'Edm.String', maxLength: 15},
    postalCode: {name: 'PostalCode', type: 'Edm.String', maxLength: 10},
    country: {name: 'Country', type: 'Edm.String', maxLength: 15},
    homePhone: {name: 'HomePhone', type: 'Edm.String', maxLength: 24},
    extension: {name: 'Extension', type: 'Edm.String', maxLength: 4},
    photo: {name: 'Photo', type: 'Edm.Binary'},
    notes: {name: 'Notes', type: 'Edm.String'},
    reportsTo: {name: 'ReportsTo', type: 'Edm.Int32'},
    photoPath: {name: 'PhotoPath', type: 'Edm.String', maxLength: 255},
    employees1: {name: 'Employees1', type: 'NorthwindModel.Employee', collection: true, navigation: true},
    employee1: {name: 'Employee1', type: 'NorthwindModel.Employee', navigation: true, field: 'ReportsTo', ref: 'EmployeeID'},
    orders: {name: 'Orders', type: 'NorthwindModel.Order', collection: true, navigation: true},
    territories: {name: 'Territories', type: 'NorthwindModel.Territory', collection: true, navigation: true}
  }
} as EntityConfig<Employee>;
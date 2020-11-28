import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Employee } from './employee.entity';
import { EmployeeModel } from './employee.model';
import { EmployeeCollection } from './employee.collection';
//#endregion

export const EmployeeConfig = {
  name: "Employee",
  base: "ODataDemo.Person",
  model: EmployeeModel,
  collection: EmployeeCollection,
  annotations: [],
  fields: {
    EmployeeID: {type: 'Edm.Int64', nullable: false},
    HireDate: {type: 'Edm.DateTime', nullable: false},
    Salary: {type: 'Edm.Single', nullable: false}
  }
} as StructuredTypeConfig<Employee>;
//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { EmployeesService } from './employees.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const EmployeesServiceEntitySetConfig = {
  name: "Employees",
  entityType: "NorthwindModel.Employee",
  service: EmployeesService
} as EntitySetConfig;
//#endregion
//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { EmployeesService } from './employees.service';
//#endregion

//#region ODataApi EntitySetConfig
export const EmployeesServiceEntitySetConfig = {
  name: "Employees",
  entityType: "NorthwindModel.Employee",
  service: EmployeesService
} as EntitySetConfig;
//#endregion
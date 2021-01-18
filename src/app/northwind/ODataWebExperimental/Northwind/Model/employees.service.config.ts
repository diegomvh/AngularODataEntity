﻿import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { EmployeesService } from './employees.service';
//#endregion

//#region ODataApi EntitySetConfig
export const EmployeesServiceEntitySetConfig = {
  name: "Employees",
  entityType: "NorthwindModel.Employee",
  service: EmployeesService,
  annotations: []
} as EntitySetConfig;
//#endregion
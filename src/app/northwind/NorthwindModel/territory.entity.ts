﻿//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Employee } from './employee.entity';
import { Region } from './region.entity';
import { EmployeeModel } from './employee.model';
import { RegionModel } from './region.model';
import { EmployeeCollection } from './employee.collection';
import { RegionCollection } from './region.collection';
//#endregion

export interface Territory {
  //#region ODataApiGen Properties
  TerritoryID: string;
  TerritoryDescription: string;
  RegionID: number;
  Region?: Region;
  Employees?: Employee[];
  //#endregion
}
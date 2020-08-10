import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Employee } from './employee.entity';
import { Region } from './region.entity';
import { EmployeeModel } from './employee.model';
import { RegionModel } from './region.model';
import { EmployeeCollection } from './employee.collection';
import { RegionCollection } from './region.collection';
//#endregion

export interface Territory {
  //#region ODataApi Properties
  TerritoryID: string;
  TerritoryDescription: string;
  RegionID: number;
  Region?: Region;
  Employees?: Employee[];
  //#endregion
}
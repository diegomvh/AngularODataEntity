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
  territoryID: string;
  territoryDescription: string;
  regionID: number;
  region?: Region;
  employees?: Employee[];
  //#endregion
}
import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Employee } from './employee.entity';
import { Region } from './region.entity';
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
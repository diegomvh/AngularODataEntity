import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { TerritoryCollection } from './territory.collection';
//#endregion

export interface Region {
  //#region ODataApi Properties
  RegionID: number;
  RegionDescription: string;
  Territories?: Territory[];
  //#endregion
}
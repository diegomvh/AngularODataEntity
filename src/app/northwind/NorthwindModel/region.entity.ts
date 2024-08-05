//#region ODataApiGen ODataImports
import {
  Duration
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { TerritoryCollection } from './territory.collection';
//#endregion

//#region ODataApiGen Type
export const RegionType = 'NorthwindModel.Region';//#endregion
export interface Region {
  //#region ODataApiGen Properties
  RegionID: number;
  RegionDescription?: string;
  Territories?: Territory[];
  //#endregion
}
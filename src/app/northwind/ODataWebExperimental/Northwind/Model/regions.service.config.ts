﻿//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { RegionsService } from './regions.service';
//#endregion

//#region ODataApi EntitySetConfig
export const RegionsServiceEntitySetConfig = {
  name: "Regions",
  entityType: "NorthwindModel.Region",
  service: RegionsService
} as EntitySetConfig;
//#endregion
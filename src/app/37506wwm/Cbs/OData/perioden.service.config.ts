//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { PeriodenService } from './perioden.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const PeriodenServiceEntitySetConfig = {
  name: "Perioden",
  entityType: "Cbs.OData.TimeCategory",
  service: PeriodenService
} as EntitySetConfig;
//#endregion
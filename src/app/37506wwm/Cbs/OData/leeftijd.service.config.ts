//#region ODataApiGen ODataImports
import {
  EntitySetConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { LeeftijdService } from './leeftijd.service';
//#endregion

//#region ODataApiGen EntitySetConfig
export const LeeftijdServiceEntitySetConfig = {
  name: "Leeftijd",
  entityType: "Cbs.OData.Category",
  service: LeeftijdService
} as EntitySetConfig;
//#endregion
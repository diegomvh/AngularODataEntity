//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PeriodenService } from './perioden.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PeriodenServiceEntitySetConfig = {
  name: "Perioden",
  entityType: "Cbs.OData.TimeCategory",
  service: PeriodenService
} as EntitySetConfig;
//#endregion
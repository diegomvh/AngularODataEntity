import { EntitySetConfig } from 'angular-odata';

//#region ODataApi Imports
import { LeeftijdService } from './leeftijd.service';
//#endregion

//#region ODataApi EntitySetConfig
export const LeeftijdServiceEntitySetConfig = {
  name: "Leeftijd",
  entityType: "Cbs.OData.Category",
  service: LeeftijdService
} as EntitySetConfig;
//#endregion
import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteSourceService } from './onenotesourceservice.enum';
//#endregion

export const OnenoteSourceServiceConfig = {
  name: "onenoteSourceService",
  members: OnenoteSourceService
} as EnumTypeConfig<OnenoteSourceService>;
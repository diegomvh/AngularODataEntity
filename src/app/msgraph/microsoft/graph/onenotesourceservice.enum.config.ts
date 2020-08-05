import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnenoteSourceService } from './onenotesourceservice.enum';
//#endregion

export const OnenoteSourceServiceConfig = {
  name: "OnenoteSourceService",
  members: OnenoteSourceService
} as EnumConfig<OnenoteSourceService>;
import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResponseType } from './responsetype.enum';
//#endregion

export const ResponseTypeConfig = {
  name: "responseType",
  members: ResponseType
} as EnumTypeConfig<ResponseType>;
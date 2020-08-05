import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResponseType } from './responsetype.enum';
//#endregion

export const ResponseTypeConfig = {
  name: "ResponseType",
  members: ResponseType
} as EnumConfig<ResponseType>;
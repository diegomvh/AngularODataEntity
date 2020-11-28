import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { BodyType } from './bodytype.enum';
//#endregion

export const BodyTypeConfig = {
  name: "bodyType",
  members: BodyType
} as EnumTypeConfig<BodyType>;
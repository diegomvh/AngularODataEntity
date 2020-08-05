import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { BodyType } from './bodytype.enum';
//#endregion

export const BodyTypeConfig = {
  name: "BodyType",
  members: BodyType
} as EnumConfig<BodyType>;
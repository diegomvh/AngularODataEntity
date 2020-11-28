import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Enablement } from './enablement.enum';
//#endregion

export const EnablementConfig = {
  name: "enablement",
  members: Enablement
} as EnumTypeConfig<Enablement>;
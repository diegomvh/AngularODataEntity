import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { Enablement } from './enablement.enum';
//#endregion

export const EnablementConfig = {
  name: "Enablement",
  members: Enablement
} as EnumConfig<Enablement>;
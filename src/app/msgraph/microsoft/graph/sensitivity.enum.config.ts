import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Sensitivity } from './sensitivity.enum';
//#endregion

export const SensitivityConfig = {
  name: "sensitivity",
  members: Sensitivity
} as EnumTypeConfig<Sensitivity>;
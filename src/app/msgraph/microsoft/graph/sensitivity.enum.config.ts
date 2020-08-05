import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { Sensitivity } from './sensitivity.enum';
//#endregion

export const SensitivityConfig = {
  name: "Sensitivity",
  members: Sensitivity
} as EnumConfig<Sensitivity>;
import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProcessIntegrityLevel } from './processintegritylevel.enum';
//#endregion

export const ProcessIntegrityLevelConfig = {
  name: "processIntegrityLevel",
  members: ProcessIntegrityLevel
} as EnumTypeConfig<ProcessIntegrityLevel>;
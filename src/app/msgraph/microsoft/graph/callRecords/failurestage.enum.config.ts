import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { FailureStage } from './failurestage.enum';
//#endregion

export const FailureStageConfig = {
  name: "FailureStage",
  members: FailureStage
} as EnumConfig<FailureStage>;
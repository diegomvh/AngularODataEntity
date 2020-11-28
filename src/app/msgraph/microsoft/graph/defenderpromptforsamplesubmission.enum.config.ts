import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefenderPromptForSampleSubmission } from './defenderpromptforsamplesubmission.enum';
//#endregion

export const DefenderPromptForSampleSubmissionConfig = {
  name: "defenderPromptForSampleSubmission",
  members: DefenderPromptForSampleSubmission
} as EnumTypeConfig<DefenderPromptForSampleSubmission>;
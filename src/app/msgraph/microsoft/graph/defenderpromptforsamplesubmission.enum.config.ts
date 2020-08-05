import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DefenderPromptForSampleSubmission } from './defenderpromptforsamplesubmission.enum';
//#endregion

export const DefenderPromptForSampleSubmissionConfig = {
  name: "DefenderPromptForSampleSubmission",
  members: DefenderPromptForSampleSubmission
} as EnumConfig<DefenderPromptForSampleSubmission>;
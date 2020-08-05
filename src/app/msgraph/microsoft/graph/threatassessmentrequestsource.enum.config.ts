import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentRequestSource } from './threatassessmentrequestsource.enum';
//#endregion

export const ThreatAssessmentRequestSourceConfig = {
  name: "ThreatAssessmentRequestSource",
  members: ThreatAssessmentRequestSource
} as EnumConfig<ThreatAssessmentRequestSource>;
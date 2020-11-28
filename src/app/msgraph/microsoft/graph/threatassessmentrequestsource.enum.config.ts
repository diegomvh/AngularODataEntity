import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentRequestSource } from './threatassessmentrequestsource.enum';
//#endregion

export const ThreatAssessmentRequestSourceConfig = {
  name: "threatAssessmentRequestSource",
  members: ThreatAssessmentRequestSource
} as EnumTypeConfig<ThreatAssessmentRequestSource>;
import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentResultType } from './threatassessmentresulttype.enum';
//#endregion

export const ThreatAssessmentResultTypeConfig = {
  name: "ThreatAssessmentResultType",
  members: ThreatAssessmentResultType
} as EnumConfig<ThreatAssessmentResultType>;
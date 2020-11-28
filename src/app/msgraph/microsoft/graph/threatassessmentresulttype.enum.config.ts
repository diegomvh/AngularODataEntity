import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentResultType } from './threatassessmentresulttype.enum';
//#endregion

export const ThreatAssessmentResultTypeConfig = {
  name: "threatAssessmentResultType",
  members: ThreatAssessmentResultType
} as EnumTypeConfig<ThreatAssessmentResultType>;
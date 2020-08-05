import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatExpectedAssessment } from './threatexpectedassessment.enum';
//#endregion

export const ThreatExpectedAssessmentConfig = {
  name: "threatExpectedAssessment",
  members: ThreatExpectedAssessment
} as EnumConfig<ThreatExpectedAssessment>;
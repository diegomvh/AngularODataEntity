import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentStatus } from './threatassessmentstatus.enum';
//#endregion

export const ThreatAssessmentStatusConfig = {
  name: "threatAssessmentStatus",
  members: ThreatAssessmentStatus
} as EnumTypeConfig<ThreatAssessmentStatus>;
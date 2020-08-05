import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentStatus } from './threatassessmentstatus.enum';
//#endregion

export const ThreatAssessmentStatusConfig = {
  name: "ThreatAssessmentStatus",
  members: ThreatAssessmentStatus
} as EnumConfig<ThreatAssessmentStatus>;
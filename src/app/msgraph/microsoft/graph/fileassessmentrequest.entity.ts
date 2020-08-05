import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
//#endregion

export interface FileAssessmentRequest extends ThreatAssessmentRequest {
  //#region ODataApi Properties
  fileName: string;
  contentData: string;
  //#endregion
}
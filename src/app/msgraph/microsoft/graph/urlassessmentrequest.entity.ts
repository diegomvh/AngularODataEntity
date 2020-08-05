import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
//#endregion

export interface UrlAssessmentRequest extends ThreatAssessmentRequest {
  //#region ODataApi Properties
  url: string;
  //#endregion
}
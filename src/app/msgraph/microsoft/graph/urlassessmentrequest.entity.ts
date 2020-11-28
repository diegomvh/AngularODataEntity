import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
//#endregion

export interface UrlAssessmentRequest extends ThreatAssessmentRequest {
  //#region ODataApi Properties
  url: string;
  //#endregion
}
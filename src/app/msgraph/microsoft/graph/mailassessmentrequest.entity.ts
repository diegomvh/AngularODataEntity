import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { MailDestinationRoutingReason } from './maildestinationroutingreason.enum';
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
//#endregion

export interface MailAssessmentRequest extends ThreatAssessmentRequest {
  //#region ODataApi Properties
  destinationRoutingReason?: MailDestinationRoutingReason;
  messageUri: string;
  recipientEmail: string;
  //#endregion
}
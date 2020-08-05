import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { MailDestinationRoutingReason } from './maildestinationroutingreason.enum';
//#endregion

export interface MailAssessmentRequest extends ThreatAssessmentRequest {
  //#region ODataApi Properties
  recipientEmail: string;
  destinationRoutingReason?: MailDestinationRoutingReason;
  messageUri: string;
  //#endregion
}
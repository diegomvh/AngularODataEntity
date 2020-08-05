import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { MailDestinationRoutingReason } from './maildestinationroutingreason.enum';
//#endregion

export interface EmailFileAssessmentRequest extends ThreatAssessmentRequest {
  //#region ODataApi Properties
  recipientEmail: string;
  destinationRoutingReason?: MailDestinationRoutingReason;
  contentData: string;
  //#endregion
}
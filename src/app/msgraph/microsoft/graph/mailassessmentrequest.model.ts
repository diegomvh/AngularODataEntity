import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { MailDestinationRoutingReason } from './maildestinationroutingreason.enum';
import { MailAssessmentRequest } from './mailassessmentrequest.entity';
import { MailAssessmentRequestCollection } from './mailassessmentrequest.collection';
//#endregion

export class MailAssessmentRequestModel<E extends MailAssessmentRequest> extends ThreatAssessmentRequestModel<E> {
  //#region ODataApi Properties
  destinationRoutingReason?: MailDestinationRoutingReason;
  messageUri: string;
  recipientEmail: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
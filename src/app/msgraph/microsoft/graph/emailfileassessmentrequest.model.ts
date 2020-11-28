import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { MailDestinationRoutingReason } from './maildestinationroutingreason.enum';
import { EmailFileAssessmentRequest } from './emailfileassessmentrequest.entity';
import { EmailFileAssessmentRequestCollection } from './emailfileassessmentrequest.collection';
//#endregion

export class EmailFileAssessmentRequestModel<E extends EmailFileAssessmentRequest> extends ThreatAssessmentRequestModel<E> {
  //#region ODataApi Properties
  contentData: string;
  destinationRoutingReason?: MailDestinationRoutingReason;
  recipientEmail: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
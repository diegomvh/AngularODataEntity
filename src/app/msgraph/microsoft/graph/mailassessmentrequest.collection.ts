import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
import { MailDestinationRoutingReason } from './maildestinationroutingreason.enum';
import { MailAssessmentRequest } from './mailassessmentrequest.entity';
import { MailAssessmentRequestModel } from './mailassessmentrequest.model';
//#endregion

export class MailAssessmentRequestCollection<E extends MailAssessmentRequest, M extends MailAssessmentRequestModel<E>> extends ThreatAssessmentRequestCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
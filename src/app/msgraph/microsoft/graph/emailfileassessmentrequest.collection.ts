import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
import { MailDestinationRoutingReason } from './maildestinationroutingreason.enum';
import { EmailFileAssessmentRequest } from './emailfileassessmentrequest.entity';
import { EmailFileAssessmentRequestModel } from './emailfileassessmentrequest.model';
//#endregion

export class EmailFileAssessmentRequestCollection<E extends EmailFileAssessmentRequest, M extends EmailFileAssessmentRequestModel<E>> extends ThreatAssessmentRequestCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
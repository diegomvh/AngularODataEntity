import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
import { UrlAssessmentRequest } from './urlassessmentrequest.entity';
import { UrlAssessmentRequestModel } from './urlassessmentrequest.model';
//#endregion

export class UrlAssessmentRequestCollection<E extends UrlAssessmentRequest, M extends UrlAssessmentRequestModel<E>> extends ThreatAssessmentRequestCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
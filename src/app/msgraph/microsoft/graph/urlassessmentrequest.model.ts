import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { UrlAssessmentRequest } from './urlassessmentrequest.entity';
import { UrlAssessmentRequestCollection } from './urlassessmentrequest.collection';
//#endregion

export class UrlAssessmentRequestModel<E extends UrlAssessmentRequest> extends ThreatAssessmentRequestModel<E> {
  //#region ODataApi Properties
  url: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
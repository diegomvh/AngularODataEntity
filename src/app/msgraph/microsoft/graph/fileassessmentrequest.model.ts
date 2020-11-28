import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { FileAssessmentRequest } from './fileassessmentrequest.entity';
import { FileAssessmentRequestCollection } from './fileassessmentrequest.collection';
//#endregion

export class FileAssessmentRequestModel<E extends FileAssessmentRequest> extends ThreatAssessmentRequestModel<E> {
  //#region ODataApi Properties
  contentData: string;
  fileName: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
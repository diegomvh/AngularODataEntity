import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
import { FileAssessmentRequest } from './fileassessmentrequest.entity';
import { FileAssessmentRequestModel } from './fileassessmentrequest.model';
//#endregion

export class FileAssessmentRequestCollection<E extends FileAssessmentRequest, M extends FileAssessmentRequestModel<E>> extends ThreatAssessmentRequestCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
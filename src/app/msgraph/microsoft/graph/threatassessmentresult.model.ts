import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ThreatAssessmentResultType } from './threatassessmentresulttype.enum';
import { ThreatAssessmentResult } from './threatassessmentresult.entity';
import { ThreatAssessmentResultCollection } from './threatassessmentresult.collection';
//#endregion

export class ThreatAssessmentResultModel<E extends ThreatAssessmentResult> extends EntityModel<E> {
  //#region ODataApi Properties
  createdDateTime?: Date;
  message?: string;
  resultType?: ThreatAssessmentResultType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
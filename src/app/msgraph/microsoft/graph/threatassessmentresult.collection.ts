import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ThreatAssessmentResultType } from './threatassessmentresulttype.enum';
import { ThreatAssessmentResult } from './threatassessmentresult.entity';
import { ThreatAssessmentResultModel } from './threatassessmentresult.model';
//#endregion

export class ThreatAssessmentResultCollection<E extends ThreatAssessmentResult, M extends ThreatAssessmentResultModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
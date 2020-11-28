import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ThreatAssessmentContentType } from './threatassessmentcontenttype.enum';
import { ThreatAssessmentRequestSource } from './threatassessmentrequestsource.enum';
import { ThreatAssessmentStatus } from './threatassessmentstatus.enum';
import { ThreatCategory } from './threatcategory.enum';
import { ThreatExpectedAssessment } from './threatexpectedassessment.enum';
import { IdentitySet } from './identityset.complex';
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { ThreatAssessmentResult } from './threatassessmentresult.entity';
import { IdentitySetModel } from './identityset.model';
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { ThreatAssessmentResultModel } from './threatassessmentresult.model';
import { IdentitySetCollection } from './identityset.collection';
import { ThreatAssessmentResultCollection } from './threatassessmentresult.collection';
//#endregion

export class ThreatAssessmentRequestCollection<E extends ThreatAssessmentRequest, M extends ThreatAssessmentRequestModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
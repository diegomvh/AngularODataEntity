import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ThreatAssessmentContentType } from './threatassessmentcontenttype.enum';
import { ThreatAssessmentRequestSource } from './threatassessmentrequestsource.enum';
import { ThreatAssessmentStatus } from './threatassessmentstatus.enum';
import { ThreatCategory } from './threatcategory.enum';
import { ThreatExpectedAssessment } from './threatexpectedassessment.enum';
import { IdentitySet } from './identityset.entity';
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { ThreatAssessmentResult } from './threatassessmentresult.entity';
import { IdentitySetModel } from './identityset.model';
import { ThreatAssessmentResultModel } from './threatassessmentresult.model';
import { IdentitySetCollection } from './identityset.collection';
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
import { ThreatAssessmentResultCollection } from './threatassessmentresult.collection';
//#endregion

export class ThreatAssessmentRequestModel<E extends ThreatAssessmentRequest> extends EntityModel<E> {
  //#region ODataApi Properties
  category: ThreatCategory;
  contentType?: ThreatAssessmentContentType;
  createdBy?: IdentitySetModel<IdentitySet>;
  createdDateTime?: Date;
  expectedAssessment: ThreatExpectedAssessment;
  requestSource?: ThreatAssessmentRequestSource;
  status?: ThreatAssessmentStatus;
  results?: ThreatAssessmentResultCollection<ThreatAssessmentResult, ThreatAssessmentResultModel<ThreatAssessmentResult>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
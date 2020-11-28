import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { InformationProtection } from './informationprotection.entity';
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
import { InformationProtectionCollection } from './informationprotection.collection';
//#endregion

export class InformationProtectionModel<E extends InformationProtection> extends EntityModel<E> {
  //#region ODataApi Properties
  threatAssessmentRequests?: ThreatAssessmentRequestCollection<ThreatAssessmentRequest, ThreatAssessmentRequestModel<ThreatAssessmentRequest>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
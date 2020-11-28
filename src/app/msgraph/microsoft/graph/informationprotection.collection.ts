import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { ThreatAssessmentRequest } from './threatassessmentrequest.entity';
import { InformationProtection } from './informationprotection.entity';
import { ThreatAssessmentRequestModel } from './threatassessmentrequest.model';
import { InformationProtectionModel } from './informationprotection.model';
import { ThreatAssessmentRequestCollection } from './threatassessmentrequest.collection';
//#endregion

export class InformationProtectionCollection<E extends InformationProtection, M extends InformationProtectionModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
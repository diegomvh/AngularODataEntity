import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StsPolicyCollection } from './stspolicy.collection';
import { ActivityBasedTimeoutPolicy } from './activitybasedtimeoutpolicy.entity';
import { ActivityBasedTimeoutPolicyModel } from './activitybasedtimeoutpolicy.model';
//#endregion

export class ActivityBasedTimeoutPolicyCollection<E extends ActivityBasedTimeoutPolicy, M extends ActivityBasedTimeoutPolicyModel<E>> extends StsPolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
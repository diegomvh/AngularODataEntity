import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Alert } from './alert.entity';
import { SecureScore } from './securescore.entity';
import { SecureScoreControlProfile } from './securescorecontrolprofile.entity';
import { Security } from './security.entity';
import { AlertModel } from './alert.model';
import { SecureScoreModel } from './securescore.model';
import { SecureScoreControlProfileModel } from './securescorecontrolprofile.model';
import { AlertCollection } from './alert.collection';
import { SecureScoreCollection } from './securescore.collection';
import { SecureScoreControlProfileCollection } from './securescorecontrolprofile.collection';
import { SecurityCollection } from './security.collection';
//#endregion

export class SecurityModel<E extends Security> extends EntityModel<E> {
  //#region ODataApi Properties
  alerts?: AlertCollection<Alert, AlertModel<Alert>>;
  secureScoreControlProfiles?: SecureScoreControlProfileCollection<SecureScoreControlProfile, SecureScoreControlProfileModel<SecureScoreControlProfile>>;
  secureScores?: SecureScoreCollection<SecureScore, SecureScoreModel<SecureScore>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Alert } from './alert.entity';
import { SecureScore } from './securescore.entity';
import { SecureScoreControlProfile } from './securescorecontrolprofile.entity';
import { Security } from './security.entity';
import { AlertModel } from './alert.model';
import { SecureScoreModel } from './securescore.model';
import { SecureScoreControlProfileModel } from './securescorecontrolprofile.model';
import { SecurityModel } from './security.model';
import { AlertCollection } from './alert.collection';
import { SecureScoreCollection } from './securescore.collection';
import { SecureScoreControlProfileCollection } from './securescorecontrolprofile.collection';
//#endregion

export class SecurityCollection<E extends Security, M extends SecurityModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
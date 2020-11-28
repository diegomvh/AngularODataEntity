import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataSingletonService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
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
import { SecurityCollection } from './security.collection';
//#endregion

@Injectable()
export class SecurityService extends ODataSingletonService<Security> {
  constructor(protected client: ODataClient) {
    super(client, 'security', 'microsoft.graph.security');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
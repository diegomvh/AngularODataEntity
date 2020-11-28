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
import { SiuPrincipal } from '../SIU/Security/siuprincipal.entity';
import { SiuPrincipalModel } from '../SIU/Security/siuprincipal.model';
import { SiuPrincipalCollection } from '../SIU/Security/siuprincipal.collection';
//#endregion

@Injectable()
export class MeService extends ODataSingletonService<SiuPrincipal> {
  constructor(protected client: ODataClient) {
    super(client, 'me', 'SIU.Security.SiuPrincipal');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
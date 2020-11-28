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
import { IdentityContainer } from './identitycontainer.entity';
import { ConditionalAccessRoot } from './conditionalaccessroot.entity';
import { IdentityContainerModel } from './identitycontainer.model';
import { ConditionalAccessRootModel } from './conditionalaccessroot.model';
import { IdentityContainerCollection } from './identitycontainer.collection';
import { ConditionalAccessRootCollection } from './conditionalaccessroot.collection';
//#endregion

@Injectable()
export class IdentityService extends ODataSingletonService<IdentityContainer> {
  constructor(protected client: ODataClient) {
    super(client, 'identity', 'microsoft.graph.identityContainer');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
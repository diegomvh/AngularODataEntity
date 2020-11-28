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
import { Teamwork } from './teamwork.entity';
import { WorkforceIntegration } from './workforceintegration.entity';
import { TeamworkModel } from './teamwork.model';
import { WorkforceIntegrationModel } from './workforceintegration.model';
import { TeamworkCollection } from './teamwork.collection';
import { WorkforceIntegrationCollection } from './workforceintegration.collection';
//#endregion

@Injectable()
export class TeamworkService extends ODataSingletonService<Teamwork> {
  constructor(protected client: ODataClient) {
    super(client, 'teamwork', 'microsoft.graph.teamwork');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
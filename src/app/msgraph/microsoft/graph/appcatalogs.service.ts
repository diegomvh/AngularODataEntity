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
import { AppCatalogs } from './appcatalogs.entity';
import { TeamsApp } from './teamsapp.entity';
//#endregion

@Injectable()
export class AppCatalogsService extends ODataSingletonService<AppCatalogs> {
  constructor(protected client: ODataClient) {
    super(client, 'appCatalogs', 'microsoft.graph.appCatalogs');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
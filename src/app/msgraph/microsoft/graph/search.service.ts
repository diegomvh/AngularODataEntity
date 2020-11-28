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
import { SearchEntity } from './searchentity.entity';
import { SearchEntityModel } from './searchentity.model';
import { SearchEntityCollection } from './searchentity.collection';
//#endregion

@Injectable()
export class SearchService extends ODataSingletonService<SearchEntity> {
  constructor(protected client: ODataClient) {
    super(client, 'search', 'microsoft.graph.searchEntity');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
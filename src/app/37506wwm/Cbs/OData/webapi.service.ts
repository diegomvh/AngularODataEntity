﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataClient,
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
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  ODataBaseService
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

@Injectable()
export class WebAPIService extends ODataBaseService {

  constructor(protected client: ODataClient) {
    super(client, 'WebAPIContainer', '37506wwm');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
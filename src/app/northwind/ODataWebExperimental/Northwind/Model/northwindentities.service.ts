import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataClient, ODataEntityAnnotations, ODataEntitiesAnnotations, ODataValueAnnotations, ODataEntityResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
//#endregion

@Injectable()
export class NorthwindEntitiesService {
 
  constructor(protected client: ODataClient) { }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
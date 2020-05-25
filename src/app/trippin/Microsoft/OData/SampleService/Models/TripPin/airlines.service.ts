import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Airline } from './airline.entity';
//#endregion

@Injectable()
export class AirlinesService extends ODataEntityService<Airline> {
  static path: string = 'Airlines';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Airlines';
  static entity: string = 'Microsoft.OData.SampleService.Models.TripPin.Airline';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}

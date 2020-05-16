import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, ODataValueAnnotations, ODataEntityResource } from 'angular-odata';

//#region ODataApi Imports
import { PersonGender } from './persongender.enum';
import { Location } from './location.entity';
import { Photo } from './photo.entity';
import { Person } from './person.entity';
import { Trip } from './trip.entity';
//#endregion

@Injectable()
export class MeService extends ODataEntityService<Person> {
  static path: string = 'Me';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Me';
  static entity: string = 'Microsoft.OData.SampleService.Models.TripPin.Person';
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
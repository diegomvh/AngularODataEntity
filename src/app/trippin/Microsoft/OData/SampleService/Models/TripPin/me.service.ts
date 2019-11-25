import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataAnnotations, ODataEntityResource } from 'angular-odata';

import { PersonGender } from './persongender.enum';
import { Location, LocationSchema } from './location.interface';
import { Photo, PhotoSchema } from './photo.interface';
import { Person, PersonSchema } from './person.interface';
import { Trip, TripSchema } from './trip.interface';


@Injectable()
export class MeService extends ODataEntityService<Person> {
  static path: string = 'Me';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Person';
  
  // Actions
  
  // Functions
  
  // Navigations
  
}
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, ODataValueAnnotations, ODataEntityResource } from 'angular-odata';

import { PersonGender } from './persongender.enum';
import { LocationMeta } from './location.meta';
import { PhotoMeta } from './photo.meta';
import { PersonMeta } from './person.meta';
import { TripMeta } from './trip.meta';
import { Location } from './location.entity';
import { Photo } from './photo.entity';
import { Person } from './person.entity';
import { Trip } from './trip.entity';
import { PhotosService } from './photos.service';
import { PeopleService } from './people.service';


@Injectable()
export class MeService extends ODataEntityService<Person> {
  static path: string = 'Me';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Person';
  
  // Actions
  
  // Functions
  
  // Navigations
  
}
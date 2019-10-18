import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityRequest, EntityCollection } from 'angular-odata';

import { Airline, AirlineSchema } from './airline.entity';


@Injectable()
export class AirlinesService extends ODataEntityService<Airline> {
  static set: string = 'Airlines';
  static entity: string = 'Microsoft.OData.SampleService.Models.TripPin.Airline';
  
  // Actions
  
  // Functions
  
  // Navigations
  
}

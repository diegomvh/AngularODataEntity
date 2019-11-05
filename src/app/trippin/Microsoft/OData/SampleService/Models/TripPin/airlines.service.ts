import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntitySet, ODataProperty, ODataEntityResource, ODataCollection } from 'angular-odata';

import { Airline, AirlineSchema } from './airline.entity';


@Injectable()
export class AirlinesService extends ODataEntityService<Airline> {
  static set: string = 'Airlines';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Airline';
  
  // Actions
  
  // Functions
  
  // Navigations
  
}

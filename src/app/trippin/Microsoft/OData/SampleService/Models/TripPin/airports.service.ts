import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityRequest, EntityCollection } from 'angular-odata';

import { AirportLocation, AirportLocationSchema } from './airportlocation.entity';
import { Airport, AirportSchema } from './airport.entity';


@Injectable()
export class AirportsService extends ODataEntityService<Airport> {
  static set: string = 'Airports';
  static entity: string = 'Microsoft.OData.SampleService.Models.TripPin.Airport';
  
  // Actions
  
  // Functions
  
  // Navigations
  
}

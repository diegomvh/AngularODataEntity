import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntitySet, ODataProperty, ODataEntityRequest, ODataCollection } from 'angular-odata';



@Injectable()
export class AirportsService extends ODataEntityService<Airport> {
  static set: string = 'Airports';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Airport';
  
  // Actions
  
  // Functions
  
  // Navigations
  
}

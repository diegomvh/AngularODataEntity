import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntityAnnotations, 
  ODataEntitiesAnnotations, 
  ODataPropertyAnnotations, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Airport } from './airport.entity';
//#endregion

@Injectable()
export class DefaultContainerService {
 
  constructor(protected client: ODataClient) { }

  //#region ODataApi Actions
  public resetDataSource(options?: HttpOptions): Observable<[any, ODataEntityAnnotations]> {
    let args = null;
    var res = this.client.action<any>('ResetDataSource');
    options = Object.assign({config: 'TripPin'}, options || {});
    return res.call(args, 'entity', options);
  }
  //#endregion
  //#region ODataApi Functions
  public getNearestAirport(lat: number, lon: number, options?: HttpOptions): Observable<[Airport, ODataEntityAnnotations]> {
    let args = {lat, lon}
    var res = this.client.function<Airport>('GetNearestAirport');
    options = Object.assign({config: 'TripPin'}, options || {});
    return res.call(args, 'entity', options);
  }
  //#endregion
}
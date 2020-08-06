import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { PhysicalAddress } from './physicaladdress.entity';
import { OutlookGeoCoordinates } from './outlookgeocoordinates.entity';
import { Place } from './place.entity';
//#endregion

@Injectable()
export class PlacesService extends ODataEntityService<Place> {
  constructor(protected client: ODataClient) {
    super(client, 'places', 'microsoft.graph.place');
  }

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}

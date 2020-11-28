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
import { PhysicalAddress } from './physicaladdress.complex';
import { OutlookGeoCoordinates } from './outlookgeocoordinates.complex';
import { Place } from './place.entity';
import { PhysicalAddressModel } from './physicaladdress.model';
import { OutlookGeoCoordinatesModel } from './outlookgeocoordinates.model';
import { PlaceModel } from './place.model';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { OutlookGeoCoordinatesCollection } from './outlookgeocoordinates.collection';
import { PlaceCollection } from './place.collection';
//#endregion

@Injectable()
export class PlacesService extends ODataEntityService<Place> {
  constructor(protected client: ODataClient) {
    super(client, 'places', 'microsoft.graph.place');
  }

  //#region ODataApi Model
  placeModel(): PlaceModel<Place> {
    return this.entity().asModel() as PlaceModel<Place>;
  }
  //#endregion
  //#region ODataApi Collection
  placeCollection(): PlaceCollection<Place, PlaceModel<Place>> {
    return this.entities().asCollection() as PlaceCollection<Place, PlaceModel<Place>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}

import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { PhysicalAddress } from './physicaladdress.complex';
import { OutlookGeoCoordinates } from './outlookgeocoordinates.complex';
import { Place } from './place.entity';
import { PhysicalAddressModel } from './physicaladdress.model';
import { OutlookGeoCoordinatesModel } from './outlookgeocoordinates.model';
import { PlaceModel } from './place.model';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { OutlookGeoCoordinatesCollection } from './outlookgeocoordinates.collection';
//#endregion

export class PlaceCollection<E extends Place, M extends PlaceModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
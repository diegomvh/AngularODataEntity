import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PhysicalAddress } from './physicaladdress.entity';
import { OutlookGeoCoordinates } from './outlookgeocoordinates.entity';
import { Place } from './place.entity';
import { PhysicalAddressModel } from './physicaladdress.model';
import { OutlookGeoCoordinatesModel } from './outlookgeocoordinates.model';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { OutlookGeoCoordinatesCollection } from './outlookgeocoordinates.collection';
import { PlaceCollection } from './place.collection';
//#endregion

export class PlaceModel<E extends Place> extends EntityModel<E> {
  //#region ODataApi Properties
  address?: PhysicalAddressModel<PhysicalAddress>;
  displayName: string;
  geoCoordinates?: OutlookGeoCoordinatesModel<OutlookGeoCoordinates>;
  phone?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
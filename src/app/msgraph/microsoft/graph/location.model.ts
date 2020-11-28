import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LocationType } from './locationtype.enum';
import { LocationUniqueIdType } from './locationuniqueidtype.enum';
import { PhysicalAddress } from './physicaladdress.entity';
import { Location } from './location.entity';
import { OutlookGeoCoordinates } from './outlookgeocoordinates.entity';
import { PhysicalAddressModel } from './physicaladdress.model';
import { OutlookGeoCoordinatesModel } from './outlookgeocoordinates.model';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { LocationCollection } from './location.collection';
import { OutlookGeoCoordinatesCollection } from './outlookgeocoordinates.collection';
//#endregion

export class LocationModel<E extends Location> extends ODataModel<E> {
  //#region ODataApi Properties
  address?: PhysicalAddressModel<PhysicalAddress>;
  coordinates?: OutlookGeoCoordinatesModel<OutlookGeoCoordinates>;
  displayName?: string;
  locationEmailAddress?: string;
  locationType?: LocationType;
  locationUri?: string;
  uniqueId?: string;
  uniqueIdType?: LocationUniqueIdType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
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
import { LocationModel } from './location.model';
import { OutlookGeoCoordinatesModel } from './outlookgeocoordinates.model';
import { PhysicalAddressCollection } from './physicaladdress.collection';
import { OutlookGeoCoordinatesCollection } from './outlookgeocoordinates.collection';
//#endregion

export class LocationCollection<E extends Location, M extends LocationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
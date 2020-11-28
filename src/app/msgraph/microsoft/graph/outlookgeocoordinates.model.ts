import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OutlookGeoCoordinates } from './outlookgeocoordinates.complex';
import { OutlookGeoCoordinatesCollection } from './outlookgeocoordinates.collection';
//#endregion

export class OutlookGeoCoordinatesModel<E extends OutlookGeoCoordinates> extends ODataModel<E> {
  //#region ODataApi Properties
  accuracy?: number;
  altitude?: number;
  altitudeAccuracy?: number;
  latitude?: number;
  longitude?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
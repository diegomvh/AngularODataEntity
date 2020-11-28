import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GeoCoordinates } from './geocoordinates.entity';
import { SignInLocation } from './signinlocation.entity';
import { GeoCoordinatesModel } from './geocoordinates.model';
import { GeoCoordinatesCollection } from './geocoordinates.collection';
import { SignInLocationCollection } from './signinlocation.collection';
//#endregion

export class SignInLocationModel<E extends SignInLocation> extends ODataModel<E> {
  //#region ODataApi Properties
  city?: string;
  countryOrRegion?: string;
  geoCoordinates?: GeoCoordinatesModel<GeoCoordinates>;
  state?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
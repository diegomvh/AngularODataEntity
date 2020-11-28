import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { GeoCoordinates } from './geocoordinates.complex';
import { SignInLocation } from './signinlocation.complex';
import { GeoCoordinatesModel } from './geocoordinates.model';
import { SignInLocationModel } from './signinlocation.model';
import { GeoCoordinatesCollection } from './geocoordinates.collection';
//#endregion

export class SignInLocationCollection<E extends SignInLocation, M extends SignInLocationModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
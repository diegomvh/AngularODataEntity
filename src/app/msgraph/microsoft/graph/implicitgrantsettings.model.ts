import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ImplicitGrantSettings } from './implicitgrantsettings.complex';
import { ImplicitGrantSettingsCollection } from './implicitgrantsettings.collection';
//#endregion

export class ImplicitGrantSettingsModel<E extends ImplicitGrantSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  enableAccessTokenIssuance?: boolean;
  enableIdTokenIssuance?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
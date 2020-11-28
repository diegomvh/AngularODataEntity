import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ParentalControlSettings } from './parentalcontrolsettings.entity';
import { ParentalControlSettingsCollection } from './parentalcontrolsettings.collection';
//#endregion

export class ParentalControlSettingsModel<E extends ParentalControlSettings> extends ODataModel<E> {
  //#region ODataApi Properties
  countriesBlockedForMinors?: string[];
  legalAgeGroupRule?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
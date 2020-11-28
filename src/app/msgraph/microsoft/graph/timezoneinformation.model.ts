import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TimeZoneInformation } from './timezoneinformation.entity';
import { TimeZoneInformationCollection } from './timezoneinformation.collection';
//#endregion

export class TimeZoneInformationModel<E extends TimeZoneInformation> extends ODataModel<E> {
  //#region ODataApi Properties
  alias?: string;
  displayName?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
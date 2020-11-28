import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UserAgent } from './useragent.entity';
import { UserAgentCollection } from './useragent.collection';
//#endregion

export class UserAgentModel<E extends UserAgent> extends ODataModel<E> {
  //#region ODataApi Properties
  applicationVersion?: string;
  headerValue?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Link } from './link.complex';
import { LinkCollection } from './link.collection';
//#endregion

export class LinkModel<E extends Link> extends ODataModel<E> {
  //#region ODataApi Properties
  Text?: string;
  Url?: string;
  Prefix?: string;
  TargetId?: string;
  Icon?: string;
  //#endregion
  //#region ODataApi Setters
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
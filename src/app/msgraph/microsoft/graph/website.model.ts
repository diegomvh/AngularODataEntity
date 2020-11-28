import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WebsiteType } from './websitetype.enum';
import { Website } from './website.complex';
import { WebsiteCollection } from './website.collection';
//#endregion

export class WebsiteModel<E extends Website> extends ODataModel<E> {
  //#region ODataApi Properties
  address?: string;
  displayName?: string;
  type?: WebsiteType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { InformationalUrl } from './informationalurl.complex';
import { InformationalUrlCollection } from './informationalurl.collection';
//#endregion

export class InformationalUrlModel<E extends InformationalUrl> extends ODataModel<E> {
  //#region ODataApi Properties
  logoUrl?: string;
  marketingUrl?: string;
  privacyStatementUrl?: string;
  supportUrl?: string;
  termsOfServiceUrl?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
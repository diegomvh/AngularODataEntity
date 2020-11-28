import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PublicClientApplication } from './publicclientapplication.complex';
import { PublicClientApplicationCollection } from './publicclientapplication.collection';
//#endregion

export class PublicClientApplicationModel<E extends PublicClientApplication> extends ODataModel<E> {
  //#region ODataApi Properties
  redirectUris: string[];
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
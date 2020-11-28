import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { KeyCredential } from './keycredential.complex';
import { KeyCredentialCollection } from './keycredential.collection';
//#endregion

export class KeyCredentialModel<E extends KeyCredential> extends ODataModel<E> {
  //#region ODataApi Properties
  customKeyIdentifier?: ArrayBuffer;
  displayName?: string;
  endDateTime?: Date;
  key?: ArrayBuffer;
  keyId?: string;
  startDateTime?: Date;
  type?: string;
  usage?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
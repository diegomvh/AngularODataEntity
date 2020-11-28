import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PasswordCredential } from './passwordcredential.complex';
import { PasswordCredentialCollection } from './passwordcredential.collection';
//#endregion

export class PasswordCredentialModel<E extends PasswordCredential> extends ODataModel<E> {
  //#region ODataApi Properties
  customKeyIdentifier?: ArrayBuffer;
  displayName?: string;
  endDateTime?: Date;
  hint?: string;
  keyId?: string;
  secretText?: string;
  startDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
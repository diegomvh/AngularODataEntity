import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { KeyCredential } from './keycredential.complex';
import { KeyCredentialModel } from './keycredential.model';
//#endregion

export class KeyCredentialCollection<E extends KeyCredential, M extends KeyCredentialModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
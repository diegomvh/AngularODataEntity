import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PasswordCredential } from './passwordcredential.entity';
import { PasswordCredentialModel } from './passwordcredential.model';
//#endregion

export class PasswordCredentialCollection<E extends PasswordCredential, M extends PasswordCredentialModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
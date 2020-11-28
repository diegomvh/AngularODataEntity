import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ObjectIdentity } from './objectidentity.complex';
import { ObjectIdentityModel } from './objectidentity.model';
//#endregion

export class ObjectIdentityCollection<E extends ObjectIdentity, M extends ObjectIdentityModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
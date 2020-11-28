import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ObjectIdentity } from './objectidentity.entity';
import { ObjectIdentityCollection } from './objectidentity.collection';
//#endregion

export class ObjectIdentityModel<E extends ObjectIdentity> extends ODataModel<E> {
  //#region ODataApi Properties
  issuer?: string;
  issuerAssignedId?: string;
  signInType?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
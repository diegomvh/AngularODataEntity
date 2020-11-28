import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Identity } from './identity.complex';
import { IdentitySet } from './identityset.complex';
import { IdentityModel } from './identity.model';
import { IdentityCollection } from './identity.collection';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class IdentitySetModel<E extends IdentitySet> extends ODataModel<E> {
  //#region ODataApi Properties
  application?: IdentityModel<Identity>;
  device?: IdentityModel<Identity>;
  user?: IdentityModel<Identity>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { Shared } from './shared.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { SharedCollection } from './shared.collection';
//#endregion

export class SharedModel<E extends Shared> extends ODataModel<E> {
  //#region ODataApi Properties
  owner?: IdentitySetModel<IdentitySet>;
  scope?: string;
  sharedBy?: IdentitySetModel<IdentitySet>;
  sharedDateTime?: Date;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
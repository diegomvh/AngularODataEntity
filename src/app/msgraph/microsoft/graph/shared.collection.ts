import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { Shared } from './shared.complex';
import { IdentitySetModel } from './identityset.model';
import { SharedModel } from './shared.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class SharedCollection<E extends Shared, M extends SharedModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
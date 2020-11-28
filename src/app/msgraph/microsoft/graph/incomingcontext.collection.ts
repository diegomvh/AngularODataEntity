import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { IncomingContext } from './incomingcontext.complex';
import { IdentitySetModel } from './identityset.model';
import { IncomingContextModel } from './incomingcontext.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class IncomingContextCollection<E extends IncomingContext, M extends IncomingContextModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
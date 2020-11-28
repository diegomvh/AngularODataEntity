import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RoutingType } from './routingtype.enum';
import { IdentitySet } from './identityset.complex';
import { CallRoute } from './callroute.complex';
import { IdentitySetModel } from './identityset.model';
import { CallRouteModel } from './callroute.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export class CallRouteCollection<E extends CallRoute, M extends CallRouteModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RoutingType } from './routingtype.enum';
import { IdentitySet } from './identityset.entity';
import { CallRoute } from './callroute.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
import { CallRouteCollection } from './callroute.collection';
//#endregion

export class CallRouteModel<E extends CallRoute> extends ODataModel<E> {
  //#region ODataApi Properties
  final: IdentitySetModel<IdentitySet>;
  original: IdentitySetModel<IdentitySet>;
  routingType: RoutingType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
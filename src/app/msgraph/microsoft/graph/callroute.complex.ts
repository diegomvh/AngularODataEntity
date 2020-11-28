import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RoutingType } from './routingtype.enum';
import { IdentitySet } from './identityset.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface CallRoute {
  //#region ODataApi Properties
  final: IdentitySet;
  original: IdentitySet;
  routingType: RoutingType;
  //#endregion
}
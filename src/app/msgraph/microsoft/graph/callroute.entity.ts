import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RoutingType } from './routingtype.enum';
import { IdentitySet } from './identityset.entity';
//#endregion

export interface CallRoute {
  //#region ODataApi Properties
  routingType: RoutingType;
  original: IdentitySet;
  final: IdentitySet;
  //#endregion
}
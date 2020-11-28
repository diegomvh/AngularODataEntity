import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface IncomingContext {
  //#region ODataApi Properties
  observedParticipantId?: string;
  onBehalfOf?: IdentitySet;
  sourceParticipantId?: string;
  transferor?: IdentitySet;
  //#endregion
}
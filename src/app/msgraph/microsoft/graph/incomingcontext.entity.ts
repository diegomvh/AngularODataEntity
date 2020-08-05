import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
//#endregion

export interface IncomingContext {
  //#region ODataApi Properties
  sourceParticipantId?: string;
  observedParticipantId?: string;
  onBehalfOf?: IdentitySet;
  transferor?: IdentitySet;
  //#endregion
}
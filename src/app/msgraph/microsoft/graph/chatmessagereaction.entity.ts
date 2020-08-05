import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
//#endregion

export interface ChatMessageReaction {
  //#region ODataApi Properties
  reactionType: string;
  createdDateTime: Date;
  user: IdentitySet;
  //#endregion
}
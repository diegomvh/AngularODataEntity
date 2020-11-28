import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface ChatMessageReaction {
  //#region ODataApi Properties
  createdDateTime: Date;
  reactionType: string;
  user: IdentitySet;
  //#endregion
}
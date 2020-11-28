import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export interface ChatMessageMention {
  //#region ODataApi Properties
  id?: number;
  mentioned?: IdentitySet;
  mentionText?: string;
  //#endregion
}
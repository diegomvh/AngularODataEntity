import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
//#endregion

export interface ChatMessageMention {
  //#region ODataApi Properties
  id?: number;
  mentionText?: string;
  mentioned?: IdentitySet;
  //#endregion
}
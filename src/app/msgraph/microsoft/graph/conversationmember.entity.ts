import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
//#endregion

export interface ConversationMember extends Entity {
  //#region ODataApi Properties
  roles?: string[];
  displayName?: string;
  //#endregion
}
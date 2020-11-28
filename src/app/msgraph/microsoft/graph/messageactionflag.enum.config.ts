import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MessageActionFlag } from './messageactionflag.enum';
//#endregion

export const MessageActionFlagConfig = {
  name: "messageActionFlag",
  members: MessageActionFlag
} as EnumTypeConfig<MessageActionFlag>;
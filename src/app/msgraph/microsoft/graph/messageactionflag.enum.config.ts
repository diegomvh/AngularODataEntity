import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MessageActionFlag } from './messageactionflag.enum';
//#endregion

export const MessageActionFlagConfig = {
  name: "MessageActionFlag",
  members: MessageActionFlag
} as EnumConfig<MessageActionFlag>;
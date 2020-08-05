import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface TeamMessagingSettings {
  //#region ODataApi Properties
  allowUserEditMessages?: boolean;
  allowUserDeleteMessages?: boolean;
  allowOwnerDeleteMessages?: boolean;
  allowTeamMentions?: boolean;
  allowChannelMentions?: boolean;
  //#endregion
}
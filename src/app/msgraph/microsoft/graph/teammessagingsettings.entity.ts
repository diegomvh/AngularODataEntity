import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface TeamMessagingSettings {
  //#region ODataApi Properties
  allowChannelMentions?: boolean;
  allowOwnerDeleteMessages?: boolean;
  allowTeamMentions?: boolean;
  allowUserDeleteMessages?: boolean;
  allowUserEditMessages?: boolean;
  //#endregion
}
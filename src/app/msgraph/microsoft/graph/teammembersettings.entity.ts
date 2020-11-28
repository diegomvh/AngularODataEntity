import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface TeamMemberSettings {
  //#region ODataApi Properties
  allowAddRemoveApps?: boolean;
  allowCreatePrivateChannels?: boolean;
  allowCreateUpdateChannels?: boolean;
  allowCreateUpdateRemoveConnectors?: boolean;
  allowCreateUpdateRemoveTabs?: boolean;
  allowDeleteChannels?: boolean;
  //#endregion
}
import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface TeamMemberSettings {
  //#region ODataApi Properties
  allowCreateUpdateChannels?: boolean;
  allowDeleteChannels?: boolean;
  allowAddRemoveApps?: boolean;
  allowCreateUpdateRemoveTabs?: boolean;
  allowCreateUpdateRemoveConnectors?: boolean;
  //#endregion
}
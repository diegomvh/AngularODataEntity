import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
//#endregion

export const FreeBusyStatusConfig = {
  name: "freeBusyStatus",
  members: FreeBusyStatus
} as EnumTypeConfig<FreeBusyStatus>;
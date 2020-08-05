import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
//#endregion

export const FreeBusyStatusConfig = {
  name: "freeBusyStatus",
  members: FreeBusyStatus
} as EnumConfig<FreeBusyStatus>;
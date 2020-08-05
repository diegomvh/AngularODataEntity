import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { FreeBusyStatus } from './freebusystatus.enum';
//#endregion

export const FreeBusyStatusConfig = {
  name: "FreeBusyStatus",
  members: FreeBusyStatus
} as EnumConfig<FreeBusyStatus>;
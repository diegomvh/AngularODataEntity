import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { OnlineMeetingPresenters } from './onlinemeetingpresenters.enum';
//#endregion

export const OnlineMeetingPresentersConfig = {
  name: "onlineMeetingPresenters",
  members: OnlineMeetingPresenters
} as EnumTypeConfig<OnlineMeetingPresenters>;
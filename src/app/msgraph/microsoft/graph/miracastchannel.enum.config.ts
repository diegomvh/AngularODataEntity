import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MiracastChannel } from './miracastchannel.enum';
//#endregion

export const MiracastChannelConfig = {
  name: "miracastChannel",
  members: MiracastChannel
} as EnumConfig<MiracastChannel>;
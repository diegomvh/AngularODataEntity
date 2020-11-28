import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChannelMembershipType } from './channelmembershiptype.enum';
//#endregion

export const ChannelMembershipTypeConfig = {
  name: "channelMembershipType",
  members: ChannelMembershipType
} as EnumTypeConfig<ChannelMembershipType>;
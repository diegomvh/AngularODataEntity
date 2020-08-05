import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { FirewallPacketQueueingMethodType } from './firewallpacketqueueingmethodtype.enum';
//#endregion

export const FirewallPacketQueueingMethodTypeConfig = {
  name: "firewallPacketQueueingMethodType",
  members: FirewallPacketQueueingMethodType
} as EnumConfig<FirewallPacketQueueingMethodType>;
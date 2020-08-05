import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { FirewallPacketQueueingMethodType } from './firewallpacketqueueingmethodtype.enum';
//#endregion

export const FirewallPacketQueueingMethodTypeConfig = {
  name: "FirewallPacketQueueingMethodType",
  members: FirewallPacketQueueingMethodType
} as EnumConfig<FirewallPacketQueueingMethodType>;
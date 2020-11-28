import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FirewallPacketQueueingMethodType } from './firewallpacketqueueingmethodtype.enum';
//#endregion

export const FirewallPacketQueueingMethodTypeConfig = {
  name: "firewallPacketQueueingMethodType",
  members: FirewallPacketQueueingMethodType
} as EnumTypeConfig<FirewallPacketQueueingMethodType>;
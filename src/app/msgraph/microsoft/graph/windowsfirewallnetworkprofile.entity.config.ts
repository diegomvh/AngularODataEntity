import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsFirewallNetworkProfile } from './windowsfirewallnetworkprofile.entity';
import { WindowsFirewallNetworkProfileModel } from './windowsfirewallnetworkprofile.model';
import { WindowsFirewallNetworkProfileCollection } from './windowsfirewallnetworkprofile.collection';
//#endregion

export const WindowsFirewallNetworkProfileConfig = {
  name: "windowsFirewallNetworkProfile",
  model: WindowsFirewallNetworkProfileModel,
  collection: WindowsFirewallNetworkProfileCollection,
  annotations: [],
  fields: {
    authorizedApplicationRulesFromGroupPolicyMerged: {type: 'Edm.Boolean', nullable: false},
    connectionSecurityRulesFromGroupPolicyMerged: {type: 'Edm.Boolean', nullable: false},
    firewallEnabled: {type: 'graph.stateManagementSetting', nullable: false},
    globalPortRulesFromGroupPolicyMerged: {type: 'Edm.Boolean', nullable: false},
    inboundConnectionsBlocked: {type: 'Edm.Boolean', nullable: false},
    inboundNotificationsBlocked: {type: 'Edm.Boolean', nullable: false},
    incomingTrafficBlocked: {type: 'Edm.Boolean', nullable: false},
    outboundConnectionsBlocked: {type: 'Edm.Boolean', nullable: false},
    policyRulesFromGroupPolicyMerged: {type: 'Edm.Boolean', nullable: false},
    securedPacketExemptionAllowed: {type: 'Edm.Boolean', nullable: false},
    stealthModeBlocked: {type: 'Edm.Boolean', nullable: false},
    unicastResponsesToMulticastBroadcastsBlocked: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WindowsFirewallNetworkProfile>;
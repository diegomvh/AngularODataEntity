import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsFirewallNetworkProfile } from './windowsfirewallnetworkprofile.entity';
//#endregion

export const WindowsFirewallNetworkProfileConfig = {
  name: "windowsFirewallNetworkProfile",
  annotations: [],
  fields: {
    firewallEnabled: {type: 'graph.stateManagementSetting', nullable: false},
    stealthModeBlocked: {type: 'Edm.Boolean', nullable: false},
    incomingTrafficBlocked: {type: 'Edm.Boolean', nullable: false},
    unicastResponsesToMulticastBroadcastsBlocked: {type: 'Edm.Boolean', nullable: false},
    inboundNotificationsBlocked: {type: 'Edm.Boolean', nullable: false},
    authorizedApplicationRulesFromGroupPolicyMerged: {type: 'Edm.Boolean', nullable: false},
    globalPortRulesFromGroupPolicyMerged: {type: 'Edm.Boolean', nullable: false},
    connectionSecurityRulesFromGroupPolicyMerged: {type: 'Edm.Boolean', nullable: false},
    outboundConnectionsBlocked: {type: 'Edm.Boolean', nullable: false},
    inboundConnectionsBlocked: {type: 'Edm.Boolean', nullable: false},
    securedPacketExemptionAllowed: {type: 'Edm.Boolean', nullable: false},
    policyRulesFromGroupPolicyMerged: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<WindowsFirewallNetworkProfile>;
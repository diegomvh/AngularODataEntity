import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { StateManagementSetting } from './statemanagementsetting.enum';
//#endregion

export interface WindowsFirewallNetworkProfile {
  //#region ODataApi Properties
  authorizedApplicationRulesFromGroupPolicyMerged: boolean;
  connectionSecurityRulesFromGroupPolicyMerged: boolean;
  firewallEnabled: StateManagementSetting;
  globalPortRulesFromGroupPolicyMerged: boolean;
  inboundConnectionsBlocked: boolean;
  inboundNotificationsBlocked: boolean;
  incomingTrafficBlocked: boolean;
  outboundConnectionsBlocked: boolean;
  policyRulesFromGroupPolicyMerged: boolean;
  securedPacketExemptionAllowed: boolean;
  stealthModeBlocked: boolean;
  unicastResponsesToMulticastBroadcastsBlocked: boolean;
  //#endregion
}
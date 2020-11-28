import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StateManagementSetting } from './statemanagementsetting.enum';
import { WindowsFirewallNetworkProfile } from './windowsfirewallnetworkprofile.entity';
import { WindowsFirewallNetworkProfileCollection } from './windowsfirewallnetworkprofile.collection';
//#endregion

export class WindowsFirewallNetworkProfileModel<E extends WindowsFirewallNetworkProfile> extends ODataModel<E> {
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
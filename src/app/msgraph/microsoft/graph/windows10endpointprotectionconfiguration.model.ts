import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { ApplicationGuardBlockClipboardSharingType } from './applicationguardblockclipboardsharingtype.enum';
import { ApplicationGuardBlockFileTransferType } from './applicationguardblockfiletransfertype.enum';
import { AppLockerApplicationControlType } from './applockerapplicationcontroltype.enum';
import { FirewallCertificateRevocationListCheckMethodType } from './firewallcertificaterevocationlistcheckmethodtype.enum';
import { FirewallPacketQueueingMethodType } from './firewallpacketqueueingmethodtype.enum';
import { FirewallPreSharedKeyEncodingMethodType } from './firewallpresharedkeyencodingmethodtype.enum';
import { BitLockerRemovableDrivePolicy } from './bitlockerremovabledrivepolicy.complex';
import { WindowsFirewallNetworkProfile } from './windowsfirewallnetworkprofile.complex';
import { Windows10EndpointProtectionConfiguration } from './windows10endpointprotectionconfiguration.entity';
import { BitLockerRemovableDrivePolicyModel } from './bitlockerremovabledrivepolicy.model';
import { WindowsFirewallNetworkProfileModel } from './windowsfirewallnetworkprofile.model';
import { BitLockerRemovableDrivePolicyCollection } from './bitlockerremovabledrivepolicy.collection';
import { WindowsFirewallNetworkProfileCollection } from './windowsfirewallnetworkprofile.collection';
import { Windows10EndpointProtectionConfigurationCollection } from './windows10endpointprotectionconfiguration.collection';
//#endregion

export class Windows10EndpointProtectionConfigurationModel<E extends Windows10EndpointProtectionConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  applicationGuardAllowPersistence: boolean;
  applicationGuardAllowPrintToLocalPrinters: boolean;
  applicationGuardAllowPrintToNetworkPrinters: boolean;
  applicationGuardAllowPrintToPDF: boolean;
  applicationGuardAllowPrintToXPS: boolean;
  applicationGuardBlockClipboardSharing: ApplicationGuardBlockClipboardSharingType;
  applicationGuardBlockFileTransfer: ApplicationGuardBlockFileTransferType;
  applicationGuardBlockNonEnterpriseContent: boolean;
  applicationGuardEnabled: boolean;
  applicationGuardForceAuditing: boolean;
  appLockerApplicationControl: AppLockerApplicationControlType;
  bitLockerDisableWarningForOtherDiskEncryption: boolean;
  bitLockerEnableStorageCardEncryptionOnMobile: boolean;
  bitLockerEncryptDevice: boolean;
  bitLockerRemovableDrivePolicy?: BitLockerRemovableDrivePolicyModel<BitLockerRemovableDrivePolicy>;
  defenderAdditionalGuardedFolders?: string[];
  defenderAttackSurfaceReductionExcludedPaths?: string[];
  defenderExploitProtectionXml?: ArrayBuffer;
  defenderExploitProtectionXmlFileName?: string;
  defenderGuardedFoldersAllowedAppPaths?: string[];
  defenderSecurityCenterBlockExploitProtectionOverride: boolean;
  firewallBlockStatefulFTP?: boolean;
  firewallCertificateRevocationListCheckMethod: FirewallCertificateRevocationListCheckMethodType;
  firewallIdleTimeoutForSecurityAssociationInSeconds?: number;
  firewallIPSecExemptionsAllowDHCP: boolean;
  firewallIPSecExemptionsAllowICMP: boolean;
  firewallIPSecExemptionsAllowNeighborDiscovery: boolean;
  firewallIPSecExemptionsAllowRouterDiscovery: boolean;
  firewallMergeKeyingModuleSettings?: boolean;
  firewallPacketQueueingMethod: FirewallPacketQueueingMethodType;
  firewallPreSharedKeyEncodingMethod: FirewallPreSharedKeyEncodingMethodType;
  firewallProfileDomain?: WindowsFirewallNetworkProfileModel<WindowsFirewallNetworkProfile>;
  firewallProfilePrivate?: WindowsFirewallNetworkProfileModel<WindowsFirewallNetworkProfile>;
  firewallProfilePublic?: WindowsFirewallNetworkProfileModel<WindowsFirewallNetworkProfile>;
  smartScreenBlockOverrideForFiles: boolean;
  smartScreenEnableInShell: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
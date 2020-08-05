import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { FirewallPreSharedKeyEncodingMethodType } from './firewallpresharedkeyencodingmethodtype.enum';
import { FirewallCertificateRevocationListCheckMethodType } from './firewallcertificaterevocationlistcheckmethodtype.enum';
import { FirewallPacketQueueingMethodType } from './firewallpacketqueueingmethodtype.enum';
import { AppLockerApplicationControlType } from './applockerapplicationcontroltype.enum';
import { ApplicationGuardBlockFileTransferType } from './applicationguardblockfiletransfertype.enum';
import { ApplicationGuardBlockClipboardSharingType } from './applicationguardblockclipboardsharingtype.enum';
import { WindowsFirewallNetworkProfile } from './windowsfirewallnetworkprofile.entity';
import { BitLockerRemovableDrivePolicy } from './bitlockerremovabledrivepolicy.entity';
//#endregion

export interface Windows10EndpointProtectionConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  firewallBlockStatefulFTP: boolean;
  firewallIdleTimeoutForSecurityAssociationInSeconds?: number;
  firewallPreSharedKeyEncodingMethod: FirewallPreSharedKeyEncodingMethodType;
  firewallIPSecExemptionsAllowNeighborDiscovery: boolean;
  firewallIPSecExemptionsAllowICMP: boolean;
  firewallIPSecExemptionsAllowRouterDiscovery: boolean;
  firewallIPSecExemptionsAllowDHCP: boolean;
  firewallCertificateRevocationListCheckMethod: FirewallCertificateRevocationListCheckMethodType;
  firewallMergeKeyingModuleSettings: boolean;
  firewallPacketQueueingMethod: FirewallPacketQueueingMethodType;
  firewallProfileDomain?: WindowsFirewallNetworkProfile;
  firewallProfilePublic?: WindowsFirewallNetworkProfile;
  firewallProfilePrivate?: WindowsFirewallNetworkProfile;
  defenderAttackSurfaceReductionExcludedPaths?: string[];
  defenderGuardedFoldersAllowedAppPaths?: string[];
  defenderAdditionalGuardedFolders?: string[];
  defenderExploitProtectionXml?: ArrayBuffer;
  defenderExploitProtectionXmlFileName?: string;
  defenderSecurityCenterBlockExploitProtectionOverride: boolean;
  appLockerApplicationControl: AppLockerApplicationControlType;
  smartScreenEnableInShell: boolean;
  smartScreenBlockOverrideForFiles: boolean;
  applicationGuardEnabled: boolean;
  applicationGuardBlockFileTransfer: ApplicationGuardBlockFileTransferType;
  applicationGuardBlockNonEnterpriseContent: boolean;
  applicationGuardAllowPersistence: boolean;
  applicationGuardForceAuditing: boolean;
  applicationGuardBlockClipboardSharing: ApplicationGuardBlockClipboardSharingType;
  applicationGuardAllowPrintToPDF: boolean;
  applicationGuardAllowPrintToXPS: boolean;
  applicationGuardAllowPrintToLocalPrinters: boolean;
  applicationGuardAllowPrintToNetworkPrinters: boolean;
  bitLockerDisableWarningForOtherDiskEncryption: boolean;
  bitLockerEnableStorageCardEncryptionOnMobile: boolean;
  bitLockerEncryptDevice: boolean;
  bitLockerRemovableDrivePolicy?: BitLockerRemovableDrivePolicy;
  //#endregion
}
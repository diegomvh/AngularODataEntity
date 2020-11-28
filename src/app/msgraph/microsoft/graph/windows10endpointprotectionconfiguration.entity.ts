import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { ApplicationGuardBlockClipboardSharingType } from './applicationguardblockclipboardsharingtype.enum';
import { ApplicationGuardBlockFileTransferType } from './applicationguardblockfiletransfertype.enum';
import { AppLockerApplicationControlType } from './applockerapplicationcontroltype.enum';
import { FirewallCertificateRevocationListCheckMethodType } from './firewallcertificaterevocationlistcheckmethodtype.enum';
import { FirewallPacketQueueingMethodType } from './firewallpacketqueueingmethodtype.enum';
import { FirewallPreSharedKeyEncodingMethodType } from './firewallpresharedkeyencodingmethodtype.enum';
import { BitLockerRemovableDrivePolicy } from './bitlockerremovabledrivepolicy.entity';
import { WindowsFirewallNetworkProfile } from './windowsfirewallnetworkprofile.entity';
import { BitLockerRemovableDrivePolicyModel } from './bitlockerremovabledrivepolicy.model';
import { WindowsFirewallNetworkProfileModel } from './windowsfirewallnetworkprofile.model';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { BitLockerRemovableDrivePolicyCollection } from './bitlockerremovabledrivepolicy.collection';
import { WindowsFirewallNetworkProfileCollection } from './windowsfirewallnetworkprofile.collection';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface Windows10EndpointProtectionConfiguration extends DeviceConfiguration {
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
  bitLockerRemovableDrivePolicy?: BitLockerRemovableDrivePolicy;
  defenderAdditionalGuardedFolders?: string[];
  defenderAttackSurfaceReductionExcludedPaths?: string[];
  defenderExploitProtectionXml?: ArrayBuffer;
  defenderExploitProtectionXmlFileName?: string;
  defenderGuardedFoldersAllowedAppPaths?: string[];
  defenderSecurityCenterBlockExploitProtectionOverride: boolean;
  firewallBlockStatefulFTP: boolean;
  firewallCertificateRevocationListCheckMethod: FirewallCertificateRevocationListCheckMethodType;
  firewallIdleTimeoutForSecurityAssociationInSeconds?: number;
  firewallIPSecExemptionsAllowDHCP: boolean;
  firewallIPSecExemptionsAllowICMP: boolean;
  firewallIPSecExemptionsAllowNeighborDiscovery: boolean;
  firewallIPSecExemptionsAllowRouterDiscovery: boolean;
  firewallMergeKeyingModuleSettings: boolean;
  firewallPacketQueueingMethod: FirewallPacketQueueingMethodType;
  firewallPreSharedKeyEncodingMethod: FirewallPreSharedKeyEncodingMethodType;
  firewallProfileDomain?: WindowsFirewallNetworkProfile;
  firewallProfilePrivate?: WindowsFirewallNetworkProfile;
  firewallProfilePublic?: WindowsFirewallNetworkProfile;
  smartScreenBlockOverrideForFiles: boolean;
  smartScreenEnableInShell: boolean;
  //#endregion
}
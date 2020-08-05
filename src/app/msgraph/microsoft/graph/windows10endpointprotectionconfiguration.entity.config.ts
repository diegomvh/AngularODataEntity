import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10EndpointProtectionConfiguration } from './windows10endpointprotectionconfiguration.entity';
//#endregion

export const Windows10EndpointProtectionConfigurationConfig = {
  name: "windows10EndpointProtectionConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  annotations: [],
  fields: {
    firewallBlockStatefulFTP: {type: 'Edm.Boolean', nullable: false},
    firewallIdleTimeoutForSecurityAssociationInSeconds: {type: 'Edm.Int32'},
    firewallPreSharedKeyEncodingMethod: {type: 'graph.firewallPreSharedKeyEncodingMethodType', nullable: false},
    firewallIPSecExemptionsAllowNeighborDiscovery: {type: 'Edm.Boolean', nullable: false},
    firewallIPSecExemptionsAllowICMP: {type: 'Edm.Boolean', nullable: false},
    firewallIPSecExemptionsAllowRouterDiscovery: {type: 'Edm.Boolean', nullable: false},
    firewallIPSecExemptionsAllowDHCP: {type: 'Edm.Boolean', nullable: false},
    firewallCertificateRevocationListCheckMethod: {type: 'graph.firewallCertificateRevocationListCheckMethodType', nullable: false},
    firewallMergeKeyingModuleSettings: {type: 'Edm.Boolean', nullable: false},
    firewallPacketQueueingMethod: {type: 'graph.firewallPacketQueueingMethodType', nullable: false},
    firewallProfileDomain: {type: 'graph.windowsFirewallNetworkProfile'},
    firewallProfilePublic: {type: 'graph.windowsFirewallNetworkProfile'},
    firewallProfilePrivate: {type: 'graph.windowsFirewallNetworkProfile'},
    defenderAttackSurfaceReductionExcludedPaths: {type: 'Edm.String', collection: true},
    defenderGuardedFoldersAllowedAppPaths: {type: 'Edm.String', collection: true},
    defenderAdditionalGuardedFolders: {type: 'Edm.String', collection: true},
    defenderExploitProtectionXml: {type: 'Edm.Binary'},
    defenderExploitProtectionXmlFileName: {type: 'Edm.String'},
    defenderSecurityCenterBlockExploitProtectionOverride: {type: 'Edm.Boolean', nullable: false},
    appLockerApplicationControl: {type: 'graph.appLockerApplicationControlType', nullable: false},
    smartScreenEnableInShell: {type: 'Edm.Boolean', nullable: false},
    smartScreenBlockOverrideForFiles: {type: 'Edm.Boolean', nullable: false},
    applicationGuardEnabled: {type: 'Edm.Boolean', nullable: false},
    applicationGuardBlockFileTransfer: {type: 'graph.applicationGuardBlockFileTransferType', nullable: false},
    applicationGuardBlockNonEnterpriseContent: {type: 'Edm.Boolean', nullable: false},
    applicationGuardAllowPersistence: {type: 'Edm.Boolean', nullable: false},
    applicationGuardForceAuditing: {type: 'Edm.Boolean', nullable: false},
    applicationGuardBlockClipboardSharing: {type: 'graph.applicationGuardBlockClipboardSharingType', nullable: false},
    applicationGuardAllowPrintToPDF: {type: 'Edm.Boolean', nullable: false},
    applicationGuardAllowPrintToXPS: {type: 'Edm.Boolean', nullable: false},
    applicationGuardAllowPrintToLocalPrinters: {type: 'Edm.Boolean', nullable: false},
    applicationGuardAllowPrintToNetworkPrinters: {type: 'Edm.Boolean', nullable: false},
    bitLockerDisableWarningForOtherDiskEncryption: {type: 'Edm.Boolean', nullable: false},
    bitLockerEnableStorageCardEncryptionOnMobile: {type: 'Edm.Boolean', nullable: false},
    bitLockerEncryptDevice: {type: 'Edm.Boolean', nullable: false},
    bitLockerRemovableDrivePolicy: {type: 'graph.bitLockerRemovableDrivePolicy'}
  }
} as EntityConfig<Windows10EndpointProtectionConfiguration>;
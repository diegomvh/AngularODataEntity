import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10EndpointProtectionConfiguration } from './windows10endpointprotectionconfiguration.entity';
import { Windows10EndpointProtectionConfigurationModel } from './windows10endpointprotectionconfiguration.model';
import { Windows10EndpointProtectionConfigurationCollection } from './windows10endpointprotectionconfiguration.collection';
//#endregion

export const Windows10EndpointProtectionConfigurationConfig = {
  name: "windows10EndpointProtectionConfiguration",
  base: "microsoft.graph.deviceConfiguration",
  model: Windows10EndpointProtectionConfigurationModel,
  collection: Windows10EndpointProtectionConfigurationCollection,
  annotations: [],
  fields: {
    applicationGuardAllowPersistence: {type: 'Edm.Boolean', nullable: false},
    applicationGuardAllowPrintToLocalPrinters: {type: 'Edm.Boolean', nullable: false},
    applicationGuardAllowPrintToNetworkPrinters: {type: 'Edm.Boolean', nullable: false},
    applicationGuardAllowPrintToPDF: {type: 'Edm.Boolean', nullable: false},
    applicationGuardAllowPrintToXPS: {type: 'Edm.Boolean', nullable: false},
    applicationGuardBlockClipboardSharing: {type: 'graph.applicationGuardBlockClipboardSharingType', nullable: false},
    applicationGuardBlockFileTransfer: {type: 'graph.applicationGuardBlockFileTransferType', nullable: false},
    applicationGuardBlockNonEnterpriseContent: {type: 'Edm.Boolean', nullable: false},
    applicationGuardEnabled: {type: 'Edm.Boolean', nullable: false},
    applicationGuardForceAuditing: {type: 'Edm.Boolean', nullable: false},
    appLockerApplicationControl: {type: 'graph.appLockerApplicationControlType', nullable: false},
    bitLockerDisableWarningForOtherDiskEncryption: {type: 'Edm.Boolean', nullable: false},
    bitLockerEnableStorageCardEncryptionOnMobile: {type: 'Edm.Boolean', nullable: false},
    bitLockerEncryptDevice: {type: 'Edm.Boolean', nullable: false},
    bitLockerRemovableDrivePolicy: {type: 'graph.bitLockerRemovableDrivePolicy'},
    defenderAdditionalGuardedFolders: {type: 'Edm.String', collection: true},
    defenderAttackSurfaceReductionExcludedPaths: {type: 'Edm.String', collection: true},
    defenderExploitProtectionXml: {type: 'Edm.Binary'},
    defenderExploitProtectionXmlFileName: {type: 'Edm.String'},
    defenderGuardedFoldersAllowedAppPaths: {type: 'Edm.String', collection: true},
    defenderSecurityCenterBlockExploitProtectionOverride: {type: 'Edm.Boolean', nullable: false},
    firewallBlockStatefulFTP: {type: 'Edm.Boolean', nullable: false},
    firewallCertificateRevocationListCheckMethod: {type: 'graph.firewallCertificateRevocationListCheckMethodType', nullable: false},
    firewallIdleTimeoutForSecurityAssociationInSeconds: {type: 'Edm.Int32'},
    firewallIPSecExemptionsAllowDHCP: {type: 'Edm.Boolean', nullable: false},
    firewallIPSecExemptionsAllowICMP: {type: 'Edm.Boolean', nullable: false},
    firewallIPSecExemptionsAllowNeighborDiscovery: {type: 'Edm.Boolean', nullable: false},
    firewallIPSecExemptionsAllowRouterDiscovery: {type: 'Edm.Boolean', nullable: false},
    firewallMergeKeyingModuleSettings: {type: 'Edm.Boolean', nullable: false},
    firewallPacketQueueingMethod: {type: 'graph.firewallPacketQueueingMethodType', nullable: false},
    firewallPreSharedKeyEncodingMethod: {type: 'graph.firewallPreSharedKeyEncodingMethodType', nullable: false},
    firewallProfileDomain: {type: 'graph.windowsFirewallNetworkProfile'},
    firewallProfilePrivate: {type: 'graph.windowsFirewallNetworkProfile'},
    firewallProfilePublic: {type: 'graph.windowsFirewallNetworkProfile'},
    smartScreenBlockOverrideForFiles: {type: 'Edm.Boolean', nullable: false},
    smartScreenEnableInShell: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Windows10EndpointProtectionConfiguration>;
import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtection } from './windowsinformationprotection.entity';
import { WindowsInformationProtectionModel } from './windowsinformationprotection.model';
import { WindowsInformationProtectionCollection } from './windowsinformationprotection.collection';
//#endregion

export const WindowsInformationProtectionConfig = {
  name: "windowsInformationProtection",
  base: "microsoft.graph.managedAppPolicy",
  model: WindowsInformationProtectionModel,
  collection: WindowsInformationProtectionCollection,
  annotations: [],
  fields: {
    azureRightsManagementServicesAllowed: {type: 'Edm.Boolean', nullable: false},
    dataRecoveryCertificate: {type: 'graph.windowsInformationProtectionDataRecoveryCertificate'},
    enforcementLevel: {type: 'graph.windowsInformationProtectionEnforcementLevel', nullable: false},
    enterpriseDomain: {type: 'Edm.String'},
    enterpriseInternalProxyServers: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    enterpriseIPRanges: {type: 'graph.windowsInformationProtectionIPRangeCollection', collection: true},
    enterpriseIPRangesAreAuthoritative: {type: 'Edm.Boolean', nullable: false},
    enterpriseNetworkDomainNames: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    enterpriseProtectedDomainNames: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    enterpriseProxiedDomains: {type: 'graph.windowsInformationProtectionProxiedDomainCollection', collection: true},
    enterpriseProxyServers: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    enterpriseProxyServersAreAuthoritative: {type: 'Edm.Boolean', nullable: false},
    exemptApps: {type: 'graph.windowsInformationProtectionApp', collection: true},
    iconsVisible: {type: 'Edm.Boolean', nullable: false},
    indexingEncryptedStoresOrItemsBlocked: {type: 'Edm.Boolean', nullable: false},
    isAssigned: {type: 'Edm.Boolean', nullable: false},
    neutralDomainResources: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    protectedApps: {type: 'graph.windowsInformationProtectionApp', collection: true},
    protectionUnderLockConfigRequired: {type: 'Edm.Boolean', nullable: false},
    revokeOnUnenrollDisabled: {type: 'Edm.Boolean', nullable: false},
    rightsManagementServicesTemplateId: {type: 'Edm.Guid'},
    smbAutoEncryptedFileExtensions: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true, navigation: true},
    exemptAppLockerFiles: {type: 'graph.windowsInformationProtectionAppLockerFile', collection: true, navigation: true},
    protectedAppLockerFiles: {type: 'graph.windowsInformationProtectionAppLockerFile', collection: true, navigation: true}
  }
} as StructuredTypeConfig<WindowsInformationProtection>;
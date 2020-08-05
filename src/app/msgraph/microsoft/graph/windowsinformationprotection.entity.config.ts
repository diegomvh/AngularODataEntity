import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtection } from './windowsinformationprotection.entity';
//#endregion

export const WindowsInformationProtectionConfig = {
  name: "windowsInformationProtection",
  base: "microsoft.graph.managedAppPolicy",
  annotations: [],
  fields: {
    enforcementLevel: {type: 'graph.windowsInformationProtectionEnforcementLevel', nullable: false},
    enterpriseDomain: {type: 'Edm.String'},
    enterpriseProtectedDomainNames: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    protectionUnderLockConfigRequired: {type: 'Edm.Boolean', nullable: false},
    dataRecoveryCertificate: {type: 'graph.windowsInformationProtectionDataRecoveryCertificate'},
    revokeOnUnenrollDisabled: {type: 'Edm.Boolean', nullable: false},
    rightsManagementServicesTemplateId: {type: 'Edm.Guid'},
    azureRightsManagementServicesAllowed: {type: 'Edm.Boolean', nullable: false},
    iconsVisible: {type: 'Edm.Boolean', nullable: false},
    protectedApps: {type: 'graph.windowsInformationProtectionApp', collection: true},
    exemptApps: {type: 'graph.windowsInformationProtectionApp', collection: true},
    enterpriseNetworkDomainNames: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    enterpriseProxiedDomains: {type: 'graph.windowsInformationProtectionProxiedDomainCollection', collection: true},
    enterpriseIPRanges: {type: 'graph.windowsInformationProtectionIPRangeCollection', collection: true},
    enterpriseIPRangesAreAuthoritative: {type: 'Edm.Boolean', nullable: false},
    enterpriseProxyServers: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    enterpriseInternalProxyServers: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    enterpriseProxyServersAreAuthoritative: {type: 'Edm.Boolean', nullable: false},
    neutralDomainResources: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    indexingEncryptedStoresOrItemsBlocked: {type: 'Edm.Boolean', nullable: false},
    smbAutoEncryptedFileExtensions: {type: 'graph.windowsInformationProtectionResourceCollection', collection: true},
    isAssigned: {type: 'Edm.Boolean', nullable: false},
    protectedAppLockerFiles: {type: 'graph.windowsInformationProtectionAppLockerFile', collection: true, navigation: true},
    exemptAppLockerFiles: {type: 'graph.windowsInformationProtectionAppLockerFile', collection: true, navigation: true},
    assignments: {type: 'graph.targetedManagedAppPolicyAssignment', collection: true, navigation: true}
  }
} as EntityConfig<WindowsInformationProtection>;
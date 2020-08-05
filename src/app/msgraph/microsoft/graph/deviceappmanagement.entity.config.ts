import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceAppManagement } from './deviceappmanagement.entity';
//#endregion

export const DeviceAppManagementConfig = {
  name: "DeviceAppManagement",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    microsoftStoreForBusinessLastSuccessfulSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    isEnabledForMicrosoftStoreForBusiness: {type: 'Edm.Boolean', nullable: false},
    microsoftStoreForBusinessLanguage: {type: 'Edm.String'},
    microsoftStoreForBusinessLastCompletedApplicationSyncTime: {type: 'Edm.DateTimeOffset', nullable: false},
    managedEBooks: {type: 'graph.managedEBook', collection: true, navigation: true},
    mobileApps: {type: 'graph.mobileApp', collection: true, navigation: true},
    mobileAppCategories: {type: 'graph.mobileAppCategory', collection: true, navigation: true},
    mobileAppConfigurations: {type: 'graph.managedDeviceMobileAppConfiguration', collection: true, navigation: true},
    vppTokens: {type: 'graph.vppToken', collection: true, navigation: true},
    managedAppPolicies: {type: 'graph.managedAppPolicy', collection: true, navigation: true},
    iosManagedAppProtections: {type: 'graph.iosManagedAppProtection', collection: true, navigation: true},
    androidManagedAppProtections: {type: 'graph.androidManagedAppProtection', collection: true, navigation: true},
    defaultManagedAppProtections: {type: 'graph.defaultManagedAppProtection', collection: true, navigation: true},
    targetedManagedAppConfigurations: {type: 'graph.targetedManagedAppConfiguration', collection: true, navigation: true},
    mdmWindowsInformationProtectionPolicies: {type: 'graph.mdmWindowsInformationProtectionPolicy', collection: true, navigation: true},
    windowsInformationProtectionPolicies: {type: 'graph.windowsInformationProtectionPolicy', collection: true, navigation: true},
    managedAppRegistrations: {type: 'graph.managedAppRegistration', collection: true, navigation: true},
    managedAppStatuses: {type: 'graph.managedAppStatus', collection: true, navigation: true}
  }
} as EntityConfig<DeviceAppManagement>;
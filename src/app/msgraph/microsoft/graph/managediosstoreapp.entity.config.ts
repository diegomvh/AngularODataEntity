import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedIOSStoreApp } from './managediosstoreapp.entity';
//#endregion

export const ManagedIOSStoreAppConfig = {
  name: "ManagedIOSStoreApp",
  base: "microsoft.graph.managedApp",
  annotations: [],
  fields: {
    bundleId: {type: 'Edm.String'},
    appStoreUrl: {type: 'Edm.String', nullable: false},
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem', nullable: false}
  }
} as EntityConfig<ManagedIOSStoreApp>;
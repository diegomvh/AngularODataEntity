import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedIOSStoreApp } from './managediosstoreapp.entity';
import { ManagedIOSStoreAppModel } from './managediosstoreapp.model';
import { ManagedIOSStoreAppCollection } from './managediosstoreapp.collection';
//#endregion

export const ManagedIOSStoreAppConfig = {
  name: "managedIOSStoreApp",
  base: "microsoft.graph.managedApp",
  model: ManagedIOSStoreAppModel,
  collection: ManagedIOSStoreAppCollection,
  annotations: [],
  fields: {
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    appStoreUrl: {type: 'Edm.String', nullable: false},
    bundleId: {type: 'Edm.String'},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem', nullable: false}
  }
} as EntityConfig<ManagedIOSStoreApp>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosStoreApp } from './iosstoreapp.entity';
//#endregion

export const IosStoreAppConfig = {
  name: "IosStoreApp",
  base: "microsoft.graph.mobileApp",
  annotations: [],
  fields: {
    bundleId: {type: 'Edm.String'},
    appStoreUrl: {type: 'Edm.String'},
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem'}
  }
} as EntityConfig<IosStoreApp>;
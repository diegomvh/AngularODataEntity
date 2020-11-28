import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosStoreApp } from './iosstoreapp.entity';
import { IosStoreAppModel } from './iosstoreapp.model';
import { IosStoreAppCollection } from './iosstoreapp.collection';
//#endregion

export const IosStoreAppConfig = {
  name: "iosStoreApp",
  base: "microsoft.graph.mobileApp",
  model: IosStoreAppModel,
  collection: IosStoreAppCollection,
  annotations: [],
  fields: {
    applicableDeviceType: {type: 'graph.iosDeviceType', nullable: false},
    appStoreUrl: {type: 'Edm.String'},
    bundleId: {type: 'Edm.String'},
    minimumSupportedOperatingSystem: {type: 'graph.iosMinimumOperatingSystem'}
  }
} as EntityConfig<IosStoreApp>;
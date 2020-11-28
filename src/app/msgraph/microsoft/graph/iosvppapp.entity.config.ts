import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosVppApp } from './iosvppapp.entity';
import { IosVppAppModel } from './iosvppapp.model';
import { IosVppAppCollection } from './iosvppapp.collection';
//#endregion

export const IosVppAppConfig = {
  name: "iosVppApp",
  base: "microsoft.graph.mobileApp",
  model: IosVppAppModel,
  collection: IosVppAppCollection,
  annotations: [],
  fields: {
    applicableDeviceType: {type: 'graph.iosDeviceType'},
    appStoreUrl: {type: 'Edm.String'},
    bundleId: {type: 'Edm.String'},
    licensingType: {type: 'graph.vppLicensingType'},
    releaseDateTime: {type: 'Edm.DateTimeOffset'},
    totalLicenseCount: {type: 'Edm.Int32', nullable: false},
    usedLicenseCount: {type: 'Edm.Int32', nullable: false},
    vppTokenAccountType: {type: 'graph.vppTokenAccountType', nullable: false},
    vppTokenAppleId: {type: 'Edm.String'},
    vppTokenOrganizationName: {type: 'Edm.String'}
  }
} as EntityConfig<IosVppApp>;
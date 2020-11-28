import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserInstallStateSummary } from './userinstallstatesummary.entity';
import { UserInstallStateSummaryModel } from './userinstallstatesummary.model';
import { UserInstallStateSummaryCollection } from './userinstallstatesummary.collection';
//#endregion

export const UserInstallStateSummaryConfig = {
  name: "userInstallStateSummary",
  base: "microsoft.graph.entity",
  model: UserInstallStateSummaryModel,
  collection: UserInstallStateSummaryCollection,
  annotations: [],
  fields: {
    failedDeviceCount: {type: 'Edm.Int32', nullable: false},
    installedDeviceCount: {type: 'Edm.Int32', nullable: false},
    notInstalledDeviceCount: {type: 'Edm.Int32', nullable: false},
    userName: {type: 'Edm.String'},
    deviceStates: {type: 'graph.deviceInstallState', collection: true, navigation: true}
  }
} as StructuredTypeConfig<UserInstallStateSummary>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserInstallStateSummary } from './userinstallstatesummary.entity';
//#endregion

export const UserInstallStateSummaryConfig = {
  name: "userInstallStateSummary",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    userName: {type: 'Edm.String'},
    installedDeviceCount: {type: 'Edm.Int32', nullable: false},
    failedDeviceCount: {type: 'Edm.Int32', nullable: false},
    notInstalledDeviceCount: {type: 'Edm.Int32', nullable: false},
    deviceStates: {type: 'graph.deviceInstallState', collection: true, navigation: true}
  }
} as EntityConfig<UserInstallStateSummary>;
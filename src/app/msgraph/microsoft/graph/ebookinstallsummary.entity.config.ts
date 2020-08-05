import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { EBookInstallSummary } from './ebookinstallsummary.entity';
//#endregion

export const EBookInstallSummaryConfig = {
  name: "EBookInstallSummary",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    installedDeviceCount: {type: 'Edm.Int32', nullable: false},
    failedDeviceCount: {type: 'Edm.Int32', nullable: false},
    notInstalledDeviceCount: {type: 'Edm.Int32', nullable: false},
    installedUserCount: {type: 'Edm.Int32', nullable: false},
    failedUserCount: {type: 'Edm.Int32', nullable: false},
    notInstalledUserCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<EBookInstallSummary>;
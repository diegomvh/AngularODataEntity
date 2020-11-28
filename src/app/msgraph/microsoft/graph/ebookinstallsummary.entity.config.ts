import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { EBookInstallSummary } from './ebookinstallsummary.entity';
import { EBookInstallSummaryModel } from './ebookinstallsummary.model';
import { EBookInstallSummaryCollection } from './ebookinstallsummary.collection';
//#endregion

export const EBookInstallSummaryConfig = {
  name: "eBookInstallSummary",
  base: "microsoft.graph.entity",
  model: EBookInstallSummaryModel,
  collection: EBookInstallSummaryCollection,
  annotations: [],
  fields: {
    failedDeviceCount: {type: 'Edm.Int32', nullable: false},
    failedUserCount: {type: 'Edm.Int32', nullable: false},
    installedDeviceCount: {type: 'Edm.Int32', nullable: false},
    installedUserCount: {type: 'Edm.Int32', nullable: false},
    notInstalledDeviceCount: {type: 'Edm.Int32', nullable: false},
    notInstalledUserCount: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<EBookInstallSummary>;
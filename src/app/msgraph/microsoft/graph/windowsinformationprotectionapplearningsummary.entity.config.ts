import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionAppLearningSummary } from './windowsinformationprotectionapplearningsummary.entity';
import { WindowsInformationProtectionAppLearningSummaryModel } from './windowsinformationprotectionapplearningsummary.model';
import { WindowsInformationProtectionAppLearningSummaryCollection } from './windowsinformationprotectionapplearningsummary.collection';
//#endregion

export const WindowsInformationProtectionAppLearningSummaryConfig = {
  name: "windowsInformationProtectionAppLearningSummary",
  base: "microsoft.graph.entity",
  model: WindowsInformationProtectionAppLearningSummaryModel,
  collection: WindowsInformationProtectionAppLearningSummaryCollection,
  annotations: [],
  fields: {
    applicationName: {type: 'Edm.String'},
    applicationType: {type: 'graph.applicationType', nullable: false},
    deviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<WindowsInformationProtectionAppLearningSummary>;
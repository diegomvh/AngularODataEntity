import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionNetworkLearningSummary } from './windowsinformationprotectionnetworklearningsummary.entity';
import { WindowsInformationProtectionNetworkLearningSummaryModel } from './windowsinformationprotectionnetworklearningsummary.model';
import { WindowsInformationProtectionNetworkLearningSummaryCollection } from './windowsinformationprotectionnetworklearningsummary.collection';
//#endregion

export const WindowsInformationProtectionNetworkLearningSummaryConfig = {
  name: "windowsInformationProtectionNetworkLearningSummary",
  base: "microsoft.graph.entity",
  model: WindowsInformationProtectionNetworkLearningSummaryModel,
  collection: WindowsInformationProtectionNetworkLearningSummaryCollection,
  annotations: [],
  fields: {
    deviceCount: {type: 'Edm.Int32', nullable: false},
    url: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsInformationProtectionNetworkLearningSummary>;
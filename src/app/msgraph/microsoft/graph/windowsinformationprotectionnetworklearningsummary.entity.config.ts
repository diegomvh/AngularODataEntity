import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionNetworkLearningSummary } from './windowsinformationprotectionnetworklearningsummary.entity';
//#endregion

export const WindowsInformationProtectionNetworkLearningSummaryConfig = {
  name: "windowsInformationProtectionNetworkLearningSummary",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    url: {type: 'Edm.String'},
    deviceCount: {type: 'Edm.Int32', nullable: false}
  }
} as EntityConfig<WindowsInformationProtectionNetworkLearningSummary>;
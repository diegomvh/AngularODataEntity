import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionIPRangeCollection } from './windowsinformationprotectioniprangecollection.complex';
import { WindowsInformationProtectionIPRangeCollectionModel } from './windowsinformationprotectioniprangecollection.model';
import { WindowsInformationProtectionIPRangeCollectionCollection } from './windowsinformationprotectioniprangecollection.collection';
//#endregion

export const WindowsInformationProtectionIPRangeCollectionConfig = {
  name: "windowsInformationProtectionIPRangeCollection",
  model: WindowsInformationProtectionIPRangeCollectionModel,
  collection: WindowsInformationProtectionIPRangeCollectionCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    ranges: {type: 'graph.ipRange', nullable: false, collection: true}
  }
} as StructuredTypeConfig<WindowsInformationProtectionIPRangeCollection>;
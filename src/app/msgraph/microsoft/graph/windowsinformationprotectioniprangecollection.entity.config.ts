import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionIPRangeCollection } from './windowsinformationprotectioniprangecollection.entity';
//#endregion

export const WindowsInformationProtectionIPRangeCollectionConfig = {
  name: "WindowsInformationProtectionIPRangeCollection",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String', nullable: false},
    ranges: {type: 'graph.ipRange', nullable: false, collection: true}
  }
} as EntityConfig<WindowsInformationProtectionIPRangeCollection>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DetectedApp } from './detectedapp.entity';
//#endregion

export const DetectedAppConfig = {
  name: "detectedApp",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    version: {type: 'Edm.String'},
    sizeInByte: {type: 'Edm.Int64', nullable: false},
    deviceCount: {type: 'Edm.Int32', nullable: false},
    managedDevices: {type: 'graph.managedDevice', collection: true, navigation: true}
  }
} as EntityConfig<DetectedApp>;
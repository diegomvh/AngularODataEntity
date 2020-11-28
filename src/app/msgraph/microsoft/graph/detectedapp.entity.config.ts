import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DetectedApp } from './detectedapp.entity';
import { DetectedAppModel } from './detectedapp.model';
import { DetectedAppCollection } from './detectedapp.collection';
//#endregion

export const DetectedAppConfig = {
  name: "detectedApp",
  base: "microsoft.graph.entity",
  model: DetectedAppModel,
  collection: DetectedAppCollection,
  annotations: [],
  fields: {
    deviceCount: {type: 'Edm.Int32', nullable: false},
    displayName: {type: 'Edm.String'},
    sizeInByte: {type: 'Edm.Int64', nullable: false},
    version: {type: 'Edm.String'},
    managedDevices: {type: 'graph.managedDevice', collection: true, navigation: true}
  }
} as StructuredTypeConfig<DetectedApp>;
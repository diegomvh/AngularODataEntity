import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DriveItemVersion } from './driveitemversion.entity';
import { DriveItemVersionModel } from './driveitemversion.model';
import { DriveItemVersionCollection } from './driveitemversion.collection';
//#endregion

export const DriveItemVersionConfig = {
  name: "driveItemVersion",
  base: "microsoft.graph.baseItemVersion",
  model: DriveItemVersionModel,
  collection: DriveItemVersionCollection,
  annotations: [],
  fields: {
    content: {type: 'Edm.Stream'},
    size: {type: 'Edm.Int64'}
  }
} as StructuredTypeConfig<DriveItemVersion>;
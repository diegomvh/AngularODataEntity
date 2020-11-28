import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DriveItemUploadableProperties } from './driveitemuploadableproperties.complex';
import { DriveItemUploadablePropertiesModel } from './driveitemuploadableproperties.model';
import { DriveItemUploadablePropertiesCollection } from './driveitemuploadableproperties.collection';
//#endregion

export const DriveItemUploadablePropertiesConfig = {
  name: "driveItemUploadableProperties",
  model: DriveItemUploadablePropertiesModel,
  collection: DriveItemUploadablePropertiesCollection,
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    fileSize: {type: 'Edm.Int64'},
    fileSystemInfo: {type: 'graph.fileSystemInfo'},
    name: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DriveItemUploadableProperties>;
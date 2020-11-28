import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DriveItemUploadableProperties } from './driveitemuploadableproperties.entity';
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
} as EntityConfig<DriveItemUploadableProperties>;
import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DriveItemUploadableProperties } from './driveitemuploadableproperties.entity';
//#endregion

export const DriveItemUploadablePropertiesConfig = {
  name: "DriveItemUploadableProperties",
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    fileSystemInfo: {type: 'graph.fileSystemInfo'},
    name: {type: 'Edm.String'},
    fileSize: {type: 'Edm.Int64'}
  }
} as EntityConfig<DriveItemUploadableProperties>;
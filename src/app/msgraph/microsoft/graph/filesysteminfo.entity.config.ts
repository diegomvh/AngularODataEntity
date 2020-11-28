import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileSystemInfo } from './filesysteminfo.entity';
import { FileSystemInfoModel } from './filesysteminfo.model';
import { FileSystemInfoCollection } from './filesysteminfo.collection';
//#endregion

export const FileSystemInfoConfig = {
  name: "fileSystemInfo",
  model: FileSystemInfoModel,
  collection: FileSystemInfoCollection,
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastAccessedDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<FileSystemInfo>;
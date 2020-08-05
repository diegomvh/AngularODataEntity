import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileSystemInfo } from './filesysteminfo.entity';
//#endregion

export const FileSystemInfoConfig = {
  name: "FileSystemInfo",
  annotations: [],
  fields: {
    createdDateTime: {type: 'Edm.DateTimeOffset'},
    lastAccessedDateTime: {type: 'Edm.DateTimeOffset'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<FileSystemInfo>;
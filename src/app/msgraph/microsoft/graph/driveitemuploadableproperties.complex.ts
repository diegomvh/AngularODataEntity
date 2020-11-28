import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FileSystemInfo } from './filesysteminfo.complex';
import { FileSystemInfoModel } from './filesysteminfo.model';
import { FileSystemInfoCollection } from './filesysteminfo.collection';
//#endregion

export interface DriveItemUploadableProperties {
  //#region ODataApi Properties
  description?: string;
  fileSize?: number;
  fileSystemInfo?: FileSystemInfo;
  name?: string;
  //#endregion
}
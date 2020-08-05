import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FileSystemInfo } from './filesysteminfo.entity';
//#endregion

export interface DriveItemUploadableProperties {
  //#region ODataApi Properties
  description?: string;
  fileSystemInfo?: FileSystemInfo;
  name?: string;
  fileSize?: number;
  //#endregion
}
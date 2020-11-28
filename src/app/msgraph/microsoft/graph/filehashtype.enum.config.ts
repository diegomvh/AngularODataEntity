import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { FileHashType } from './filehashtype.enum';
//#endregion

export const FileHashTypeConfig = {
  name: "fileHashType",
  members: FileHashType
} as EnumTypeConfig<FileHashType>;
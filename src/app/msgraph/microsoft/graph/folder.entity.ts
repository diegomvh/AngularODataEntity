import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FolderView } from './folderview.entity';
//#endregion

export interface Folder {
  //#region ODataApi Properties
  childCount?: number;
  view?: FolderView;
  //#endregion
}
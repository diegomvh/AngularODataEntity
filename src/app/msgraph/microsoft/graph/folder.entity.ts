import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { FolderView } from './folderview.entity';
import { FolderViewModel } from './folderview.model';
import { FolderViewCollection } from './folderview.collection';
//#endregion

export interface Folder {
  //#region ODataApi Properties
  childCount?: number;
  view?: FolderView;
  //#endregion
}
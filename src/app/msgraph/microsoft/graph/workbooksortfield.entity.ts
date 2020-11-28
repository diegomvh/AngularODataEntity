import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WorkbookIcon } from './workbookicon.entity';
import { WorkbookIconModel } from './workbookicon.model';
import { WorkbookIconCollection } from './workbookicon.collection';
//#endregion

export interface WorkbookSortField {
  //#region ODataApi Properties
  ascending: boolean;
  color?: string;
  dataOption: string;
  icon?: WorkbookIcon;
  key: number;
  sortOn: string;
  //#endregion
}
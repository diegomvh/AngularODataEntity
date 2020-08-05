import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookSortField } from './workbooksortfield.entity';
//#endregion

export interface WorkbookTableSort extends Entity {
  //#region ODataApi Properties
  fields?: WorkbookSortField[];
  matchCase: boolean;
  method: string;
  //#endregion
}
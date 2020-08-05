import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
//#endregion

export interface WorkbookPivotTable extends Entity {
  //#region ODataApi Properties
  name?: string;
  worksheet?: WorkbookWorksheet;
  //#endregion
}
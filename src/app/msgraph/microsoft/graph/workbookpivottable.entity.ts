import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { EntityModel } from './entity.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { EntityCollection } from './entity.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
//#endregion

export interface WorkbookPivotTable extends Entity {
  //#region ODataApi Properties
  name?: string;
  worksheet?: WorkbookWorksheet;
  //#endregion
}
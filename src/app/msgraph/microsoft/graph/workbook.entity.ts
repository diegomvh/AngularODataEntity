import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookApplication } from './workbookapplication.entity';
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookComment } from './workbookcomment.entity';
import { WorkbookFunctions } from './workbookfunctions.entity';
import { WorkbookOperation } from './workbookoperation.entity';
//#endregion

export interface Workbook extends Entity {
  //#region ODataApi Properties
  application?: WorkbookApplication;
  names?: WorkbookNamedItem[];
  tables?: WorkbookTable[];
  worksheets?: WorkbookWorksheet[];
  comments?: WorkbookComment[];
  functions?: WorkbookFunctions;
  operations?: WorkbookOperation[];
  //#endregion
}
import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookChart } from './workbookchart.entity';
import { WorkbookPivotTable } from './workbookpivottable.entity';
import { WorkbookWorksheetProtection } from './workbookworksheetprotection.entity';
//#endregion

export interface WorkbookWorksheet extends Entity {
  //#region ODataApi Properties
  name?: string;
  position: number;
  visibility: string;
  charts?: WorkbookChart[];
  names?: WorkbookNamedItem[];
  pivotTables?: WorkbookPivotTable[];
  protection?: WorkbookWorksheetProtection;
  tables?: WorkbookTable[];
  //#endregion
}
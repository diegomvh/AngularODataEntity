import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookChart } from './workbookchart.entity';
import { WorkbookPivotTable } from './workbookpivottable.entity';
import { WorkbookWorksheetProtection } from './workbookworksheetprotection.entity';
import { EntityModel } from './entity.model';
import { WorkbookNamedItemModel } from './workbooknameditem.model';
import { WorkbookTableModel } from './workbooktable.model';
import { WorkbookChartModel } from './workbookchart.model';
import { WorkbookPivotTableModel } from './workbookpivottable.model';
import { WorkbookWorksheetProtectionModel } from './workbookworksheetprotection.model';
import { EntityCollection } from './entity.collection';
import { WorkbookNamedItemCollection } from './workbooknameditem.collection';
import { WorkbookTableCollection } from './workbooktable.collection';
import { WorkbookChartCollection } from './workbookchart.collection';
import { WorkbookPivotTableCollection } from './workbookpivottable.collection';
import { WorkbookWorksheetProtectionCollection } from './workbookworksheetprotection.collection';
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
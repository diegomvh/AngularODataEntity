import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookChart } from './workbookchart.entity';
import { WorkbookPivotTable } from './workbookpivottable.entity';
import { WorkbookWorksheetProtection } from './workbookworksheetprotection.entity';
import { WorkbookNamedItemModel } from './workbooknameditem.model';
import { WorkbookTableModel } from './workbooktable.model';
import { WorkbookChartModel } from './workbookchart.model';
import { WorkbookPivotTableModel } from './workbookpivottable.model';
import { WorkbookWorksheetProtectionModel } from './workbookworksheetprotection.model';
import { WorkbookNamedItemCollection } from './workbooknameditem.collection';
import { WorkbookTableCollection } from './workbooktable.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
import { WorkbookChartCollection } from './workbookchart.collection';
import { WorkbookPivotTableCollection } from './workbookpivottable.collection';
import { WorkbookWorksheetProtectionCollection } from './workbookworksheetprotection.collection';
//#endregion

export class WorkbookWorksheetModel<E extends WorkbookWorksheet> extends EntityModel<E> {
  //#region ODataApi Properties
  name?: string;
  position: number;
  visibility: string;
  charts?: WorkbookChartCollection<WorkbookChart, WorkbookChartModel<WorkbookChart>>;
  names?: WorkbookNamedItemCollection<WorkbookNamedItem, WorkbookNamedItemModel<WorkbookNamedItem>>;
  pivotTables?: WorkbookPivotTableCollection<WorkbookPivotTable, WorkbookPivotTableModel<WorkbookPivotTable>>;
  protection?: WorkbookWorksheetProtectionModel<WorkbookWorksheetProtection>;
  tables?: WorkbookTableCollection<WorkbookTable, WorkbookTableModel<WorkbookTable>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
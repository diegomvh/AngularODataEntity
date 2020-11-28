import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookTableColumn } from './workbooktablecolumn.entity';
import { WorkbookTableRow } from './workbooktablerow.entity';
import { WorkbookTableSort } from './workbooktablesort.entity';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookTableColumnModel } from './workbooktablecolumn.model';
import { WorkbookTableRowModel } from './workbooktablerow.model';
import { WorkbookTableSortModel } from './workbooktablesort.model';
import { WorkbookTableCollection } from './workbooktable.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
import { WorkbookTableColumnCollection } from './workbooktablecolumn.collection';
import { WorkbookTableRowCollection } from './workbooktablerow.collection';
import { WorkbookTableSortCollection } from './workbooktablesort.collection';
//#endregion

export class WorkbookTableModel<E extends WorkbookTable> extends EntityModel<E> {
  //#region ODataApi Properties
  highlightFirstColumn: boolean;
  highlightLastColumn: boolean;
  legacyId?: string;
  name?: string;
  showBandedColumns: boolean;
  showBandedRows: boolean;
  showFilterButton: boolean;
  showHeaders: boolean;
  showTotals: boolean;
  style?: string;
  columns?: WorkbookTableColumnCollection<WorkbookTableColumn, WorkbookTableColumnModel<WorkbookTableColumn>>;
  rows?: WorkbookTableRowCollection<WorkbookTableRow, WorkbookTableRowModel<WorkbookTableRow>>;
  sort?: WorkbookTableSortModel<WorkbookTableSort>;
  worksheet?: WorkbookWorksheetModel<WorkbookWorksheet>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
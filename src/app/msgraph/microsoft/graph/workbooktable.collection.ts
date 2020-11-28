import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookTableColumn } from './workbooktablecolumn.entity';
import { WorkbookTableRow } from './workbooktablerow.entity';
import { WorkbookTableSort } from './workbooktablesort.entity';
import { WorkbookTableModel } from './workbooktable.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookTableColumnModel } from './workbooktablecolumn.model';
import { WorkbookTableRowModel } from './workbooktablerow.model';
import { WorkbookTableSortModel } from './workbooktablesort.model';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
import { WorkbookTableColumnCollection } from './workbooktablecolumn.collection';
import { WorkbookTableRowCollection } from './workbooktablerow.collection';
import { WorkbookTableSortCollection } from './workbooktablesort.collection';
//#endregion

export class WorkbookTableCollection<E extends WorkbookTable, M extends WorkbookTableModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
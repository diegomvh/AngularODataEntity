import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookTableColumn } from './workbooktablecolumn.entity';
import { WorkbookTableRow } from './workbooktablerow.entity';
import { WorkbookTableSort } from './workbooktablesort.entity';
//#endregion

export interface WorkbookTable extends Entity {
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
  columns?: WorkbookTableColumn[];
  rows?: WorkbookTableRow[];
  sort?: WorkbookTableSort;
  worksheet?: WorkbookWorksheet;
  //#endregion
}
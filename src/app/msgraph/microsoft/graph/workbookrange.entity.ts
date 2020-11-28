import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookRangeFormat } from './workbookrangeformat.entity';
import { WorkbookRangeSort } from './workbookrangesort.entity';
import { JsonModel } from './json.model';
import { EntityModel } from './entity.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookRangeFormatModel } from './workbookrangeformat.model';
import { WorkbookRangeSortModel } from './workbookrangesort.model';
import { JsonCollection } from './json.collection';
import { EntityCollection } from './entity.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
import { WorkbookRangeFormatCollection } from './workbookrangeformat.collection';
import { WorkbookRangeSortCollection } from './workbookrangesort.collection';
//#endregion

export interface WorkbookRange extends Entity {
  //#region ODataApi Properties
  address?: string;
  addressLocal?: string;
  cellCount: number;
  columnCount: number;
  columnHidden?: boolean;
  columnIndex: number;
  formulas?: Json;
  formulasLocal?: Json;
  formulasR1C1?: Json;
  hidden?: boolean;
  numberFormat?: Json;
  rowCount: number;
  rowHidden?: boolean;
  rowIndex: number;
  text?: Json;
  values?: Json;
  valueTypes?: Json;
  format?: WorkbookRangeFormat;
  sort?: WorkbookRangeSort;
  worksheet?: WorkbookWorksheet;
  //#endregion
}
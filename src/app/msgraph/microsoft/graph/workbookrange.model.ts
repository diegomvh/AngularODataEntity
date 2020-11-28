import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Json } from './json.complex';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookRange } from './workbookrange.entity';
import { WorkbookRangeFormat } from './workbookrangeformat.entity';
import { WorkbookRangeSort } from './workbookrangesort.entity';
import { JsonModel } from './json.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookRangeFormatModel } from './workbookrangeformat.model';
import { WorkbookRangeSortModel } from './workbookrangesort.model';
import { JsonCollection } from './json.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
import { WorkbookRangeCollection } from './workbookrange.collection';
import { WorkbookRangeFormatCollection } from './workbookrangeformat.collection';
import { WorkbookRangeSortCollection } from './workbookrangesort.collection';
//#endregion

export class WorkbookRangeModel<E extends WorkbookRange> extends EntityModel<E> {
  //#region ODataApi Properties
  address?: string;
  addressLocal?: string;
  cellCount: number;
  columnCount: number;
  columnHidden?: boolean;
  columnIndex: number;
  formulas?: JsonModel<Json>;
  formulasLocal?: JsonModel<Json>;
  formulasR1C1?: JsonModel<Json>;
  hidden?: boolean;
  numberFormat?: JsonModel<Json>;
  rowCount: number;
  rowHidden?: boolean;
  rowIndex: number;
  text?: JsonModel<Json>;
  values?: JsonModel<Json>;
  valueTypes?: JsonModel<Json>;
  format?: WorkbookRangeFormatModel<WorkbookRangeFormat>;
  sort?: WorkbookRangeSortModel<WorkbookRangeSort>;
  worksheet?: WorkbookWorksheetModel<WorkbookWorksheet>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
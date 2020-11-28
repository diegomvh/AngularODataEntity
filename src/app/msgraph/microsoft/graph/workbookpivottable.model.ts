import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookPivotTable } from './workbookpivottable.entity';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
import { WorkbookPivotTableCollection } from './workbookpivottable.collection';
//#endregion

export class WorkbookPivotTableModel<E extends WorkbookPivotTable> extends EntityModel<E> {
  //#region ODataApi Properties
  name?: string;
  worksheet?: WorkbookWorksheetModel<WorkbookWorksheet>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
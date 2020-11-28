import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookPivotTable } from './workbookpivottable.entity';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookPivotTableModel } from './workbookpivottable.model';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
//#endregion

export class WorkbookPivotTableCollection<E extends WorkbookPivotTable, M extends WorkbookPivotTableModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
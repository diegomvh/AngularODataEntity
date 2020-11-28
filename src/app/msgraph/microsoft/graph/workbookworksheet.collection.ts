import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookChart } from './workbookchart.entity';
import { WorkbookPivotTable } from './workbookpivottable.entity';
import { WorkbookWorksheetProtection } from './workbookworksheetprotection.entity';
import { WorkbookNamedItemModel } from './workbooknameditem.model';
import { WorkbookTableModel } from './workbooktable.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookChartModel } from './workbookchart.model';
import { WorkbookPivotTableModel } from './workbookpivottable.model';
import { WorkbookWorksheetProtectionModel } from './workbookworksheetprotection.model';
import { WorkbookNamedItemCollection } from './workbooknameditem.collection';
import { WorkbookTableCollection } from './workbooktable.collection';
import { WorkbookChartCollection } from './workbookchart.collection';
import { WorkbookPivotTableCollection } from './workbookpivottable.collection';
import { WorkbookWorksheetProtectionCollection } from './workbookworksheetprotection.collection';
//#endregion

export class WorkbookWorksheetCollection<E extends WorkbookWorksheet, M extends WorkbookWorksheetModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
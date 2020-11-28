import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Json } from './json.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookRange } from './workbookrange.entity';
import { WorkbookRangeFormat } from './workbookrangeformat.entity';
import { WorkbookRangeSort } from './workbookrangesort.entity';
import { JsonModel } from './json.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookRangeModel } from './workbookrange.model';
import { WorkbookRangeFormatModel } from './workbookrangeformat.model';
import { WorkbookRangeSortModel } from './workbookrangesort.model';
import { JsonCollection } from './json.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
import { WorkbookRangeFormatCollection } from './workbookrangeformat.collection';
import { WorkbookRangeSortCollection } from './workbookrangesort.collection';
//#endregion

export class WorkbookRangeCollection<E extends WorkbookRange, M extends WorkbookRangeModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
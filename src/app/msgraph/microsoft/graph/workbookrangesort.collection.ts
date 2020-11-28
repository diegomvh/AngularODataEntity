import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookRangeSort } from './workbookrangesort.entity';
import { WorkbookRangeSortModel } from './workbookrangesort.model';
//#endregion

export class WorkbookRangeSortCollection<E extends WorkbookRangeSort, M extends WorkbookRangeSortModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
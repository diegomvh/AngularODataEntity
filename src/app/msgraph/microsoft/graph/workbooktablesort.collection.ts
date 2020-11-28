import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookSortField } from './workbooksortfield.complex';
import { WorkbookTableSort } from './workbooktablesort.entity';
import { WorkbookSortFieldModel } from './workbooksortfield.model';
import { WorkbookTableSortModel } from './workbooktablesort.model';
import { WorkbookSortFieldCollection } from './workbooksortfield.collection';
//#endregion

export class WorkbookTableSortCollection<E extends WorkbookTableSort, M extends WorkbookTableSortModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
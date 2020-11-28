import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Json } from './json.complex';
import { WorkbookFilter } from './workbookfilter.entity';
import { WorkbookTableColumn } from './workbooktablecolumn.entity';
import { JsonModel } from './json.model';
import { WorkbookFilterModel } from './workbookfilter.model';
import { WorkbookTableColumnModel } from './workbooktablecolumn.model';
import { JsonCollection } from './json.collection';
import { WorkbookFilterCollection } from './workbookfilter.collection';
//#endregion

export class WorkbookTableColumnCollection<E extends WorkbookTableColumn, M extends WorkbookTableColumnModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
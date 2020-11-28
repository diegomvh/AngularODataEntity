import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Json } from './json.complex';
import { WorkbookTableRow } from './workbooktablerow.entity';
import { JsonModel } from './json.model';
import { WorkbookTableRowModel } from './workbooktablerow.model';
import { JsonCollection } from './json.collection';
//#endregion

export class WorkbookTableRowCollection<E extends WorkbookTableRow, M extends WorkbookTableRowModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
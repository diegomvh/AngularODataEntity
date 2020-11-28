import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Json } from './json.entity';
import { WorkbookRangeView } from './workbookrangeview.entity';
import { JsonModel } from './json.model';
import { WorkbookRangeViewModel } from './workbookrangeview.model';
import { JsonCollection } from './json.collection';
//#endregion

export class WorkbookRangeViewCollection<E extends WorkbookRangeView, M extends WorkbookRangeViewModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
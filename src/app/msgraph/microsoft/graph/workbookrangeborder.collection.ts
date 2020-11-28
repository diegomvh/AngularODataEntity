import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookRangeBorder } from './workbookrangeborder.entity';
import { WorkbookRangeBorderModel } from './workbookrangeborder.model';
//#endregion

export class WorkbookRangeBorderCollection<E extends WorkbookRangeBorder, M extends WorkbookRangeBorderModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
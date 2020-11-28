import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookRangeFont } from './workbookrangefont.entity';
import { WorkbookRangeFontModel } from './workbookrangefont.model';
//#endregion

export class WorkbookRangeFontCollection<E extends WorkbookRangeFont, M extends WorkbookRangeFontModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
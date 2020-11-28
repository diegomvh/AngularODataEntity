import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Json } from './json.entity';
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { JsonModel } from './json.model';
import { WorkbookNamedItemModel } from './workbooknameditem.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { JsonCollection } from './json.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
//#endregion

export class WorkbookNamedItemCollection<E extends WorkbookNamedItem, M extends WorkbookNamedItemModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
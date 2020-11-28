import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Json } from './json.entity';
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { JsonModel } from './json.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { JsonCollection } from './json.collection';
import { WorkbookNamedItemCollection } from './workbooknameditem.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
//#endregion

export class WorkbookNamedItemModel<E extends WorkbookNamedItem> extends EntityModel<E> {
  //#region ODataApi Properties
  comment?: string;
  name?: string;
  scope: string;
  type?: string;
  value?: JsonModel<Json>;
  visible: boolean;
  worksheet?: WorkbookWorksheetModel<WorkbookWorksheet>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
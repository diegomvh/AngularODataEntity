import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Workbook } from './workbook.entity';
import { WorkbookApplication } from './workbookapplication.entity';
import { WorkbookComment } from './workbookcomment.entity';
import { WorkbookFunctions } from './workbookfunctions.entity';
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookOperation } from './workbookoperation.entity';
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookModel } from './workbook.model';
import { WorkbookApplicationModel } from './workbookapplication.model';
import { WorkbookCommentModel } from './workbookcomment.model';
import { WorkbookFunctionsModel } from './workbookfunctions.model';
import { WorkbookNamedItemModel } from './workbooknameditem.model';
import { WorkbookOperationModel } from './workbookoperation.model';
import { WorkbookTableModel } from './workbooktable.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookApplicationCollection } from './workbookapplication.collection';
import { WorkbookCommentCollection } from './workbookcomment.collection';
import { WorkbookFunctionsCollection } from './workbookfunctions.collection';
import { WorkbookNamedItemCollection } from './workbooknameditem.collection';
import { WorkbookOperationCollection } from './workbookoperation.collection';
import { WorkbookTableCollection } from './workbooktable.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
//#endregion

export class WorkbookCollection<E extends Workbook, M extends WorkbookModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Workbook } from './workbook.entity';
import { WorkbookApplication } from './workbookapplication.entity';
import { WorkbookComment } from './workbookcomment.entity';
import { WorkbookFunctions } from './workbookfunctions.entity';
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookOperation } from './workbookoperation.entity';
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookApplicationModel } from './workbookapplication.model';
import { WorkbookCommentModel } from './workbookcomment.model';
import { WorkbookFunctionsModel } from './workbookfunctions.model';
import { WorkbookNamedItemModel } from './workbooknameditem.model';
import { WorkbookOperationModel } from './workbookoperation.model';
import { WorkbookTableModel } from './workbooktable.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookCollection } from './workbook.collection';
import { WorkbookApplicationCollection } from './workbookapplication.collection';
import { WorkbookCommentCollection } from './workbookcomment.collection';
import { WorkbookFunctionsCollection } from './workbookfunctions.collection';
import { WorkbookNamedItemCollection } from './workbooknameditem.collection';
import { WorkbookOperationCollection } from './workbookoperation.collection';
import { WorkbookTableCollection } from './workbooktable.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
//#endregion

export class WorkbookModel<E extends Workbook> extends EntityModel<E> {
  //#region ODataApi Properties
  application?: WorkbookApplicationModel<WorkbookApplication>;
  comments?: WorkbookCommentCollection<WorkbookComment, WorkbookCommentModel<WorkbookComment>>;
  functions?: WorkbookFunctionsModel<WorkbookFunctions>;
  names?: WorkbookNamedItemCollection<WorkbookNamedItem, WorkbookNamedItemModel<WorkbookNamedItem>>;
  operations?: WorkbookOperationCollection<WorkbookOperation, WorkbookOperationModel<WorkbookOperation>>;
  tables?: WorkbookTableCollection<WorkbookTable, WorkbookTableModel<WorkbookTable>>;
  worksheets?: WorkbookWorksheetCollection<WorkbookWorksheet, WorkbookWorksheetModel<WorkbookWorksheet>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
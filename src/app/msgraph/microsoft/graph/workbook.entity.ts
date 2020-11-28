import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookApplication } from './workbookapplication.entity';
import { WorkbookComment } from './workbookcomment.entity';
import { WorkbookFunctions } from './workbookfunctions.entity';
import { WorkbookNamedItem } from './workbooknameditem.entity';
import { WorkbookOperation } from './workbookoperation.entity';
import { WorkbookTable } from './workbooktable.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { EntityModel } from './entity.model';
import { WorkbookApplicationModel } from './workbookapplication.model';
import { WorkbookCommentModel } from './workbookcomment.model';
import { WorkbookFunctionsModel } from './workbookfunctions.model';
import { WorkbookNamedItemModel } from './workbooknameditem.model';
import { WorkbookOperationModel } from './workbookoperation.model';
import { WorkbookTableModel } from './workbooktable.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { EntityCollection } from './entity.collection';
import { WorkbookApplicationCollection } from './workbookapplication.collection';
import { WorkbookCommentCollection } from './workbookcomment.collection';
import { WorkbookFunctionsCollection } from './workbookfunctions.collection';
import { WorkbookNamedItemCollection } from './workbooknameditem.collection';
import { WorkbookOperationCollection } from './workbookoperation.collection';
import { WorkbookTableCollection } from './workbooktable.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
//#endregion

export interface Workbook extends Entity {
  //#region ODataApi Properties
  application?: WorkbookApplication;
  comments?: WorkbookComment[];
  functions?: WorkbookFunctions;
  names?: WorkbookNamedItem[];
  operations?: WorkbookOperation[];
  tables?: WorkbookTable[];
  worksheets?: WorkbookWorksheet[];
  //#endregion
}
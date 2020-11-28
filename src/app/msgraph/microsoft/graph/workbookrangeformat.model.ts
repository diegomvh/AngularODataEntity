import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookFormatProtection } from './workbookformatprotection.entity';
import { WorkbookRangeFormat } from './workbookrangeformat.entity';
import { WorkbookRangeBorder } from './workbookrangeborder.entity';
import { WorkbookRangeFill } from './workbookrangefill.entity';
import { WorkbookRangeFont } from './workbookrangefont.entity';
import { WorkbookFormatProtectionModel } from './workbookformatprotection.model';
import { WorkbookRangeBorderModel } from './workbookrangeborder.model';
import { WorkbookRangeFillModel } from './workbookrangefill.model';
import { WorkbookRangeFontModel } from './workbookrangefont.model';
import { WorkbookFormatProtectionCollection } from './workbookformatprotection.collection';
import { WorkbookRangeFormatCollection } from './workbookrangeformat.collection';
import { WorkbookRangeBorderCollection } from './workbookrangeborder.collection';
import { WorkbookRangeFillCollection } from './workbookrangefill.collection';
import { WorkbookRangeFontCollection } from './workbookrangefont.collection';
//#endregion

export class WorkbookRangeFormatModel<E extends WorkbookRangeFormat> extends EntityModel<E> {
  //#region ODataApi Properties
  columnWidth?: number;
  horizontalAlignment?: string;
  rowHeight?: number;
  verticalAlignment?: string;
  wrapText?: boolean;
  borders?: WorkbookRangeBorderCollection<WorkbookRangeBorder, WorkbookRangeBorderModel<WorkbookRangeBorder>>;
  fill?: WorkbookRangeFillModel<WorkbookRangeFill>;
  font?: WorkbookRangeFontModel<WorkbookRangeFont>;
  protection?: WorkbookFormatProtectionModel<WorkbookFormatProtection>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
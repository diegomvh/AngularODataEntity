import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookFormatProtection } from './workbookformatprotection.entity';
import { WorkbookRangeFormat } from './workbookrangeformat.entity';
import { WorkbookRangeBorder } from './workbookrangeborder.entity';
import { WorkbookRangeFill } from './workbookrangefill.entity';
import { WorkbookRangeFont } from './workbookrangefont.entity';
import { WorkbookFormatProtectionModel } from './workbookformatprotection.model';
import { WorkbookRangeFormatModel } from './workbookrangeformat.model';
import { WorkbookRangeBorderModel } from './workbookrangeborder.model';
import { WorkbookRangeFillModel } from './workbookrangefill.model';
import { WorkbookRangeFontModel } from './workbookrangefont.model';
import { WorkbookFormatProtectionCollection } from './workbookformatprotection.collection';
import { WorkbookRangeBorderCollection } from './workbookrangeborder.collection';
import { WorkbookRangeFillCollection } from './workbookrangefill.collection';
import { WorkbookRangeFontCollection } from './workbookrangefont.collection';
//#endregion

export class WorkbookRangeFormatCollection<E extends WorkbookRangeFormat, M extends WorkbookRangeFormatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
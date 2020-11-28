import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookFormatProtection } from './workbookformatprotection.entity';
import { WorkbookRangeBorder } from './workbookrangeborder.entity';
import { WorkbookRangeFill } from './workbookrangefill.entity';
import { WorkbookRangeFont } from './workbookrangefont.entity';
import { EntityModel } from './entity.model';
import { WorkbookFormatProtectionModel } from './workbookformatprotection.model';
import { WorkbookRangeBorderModel } from './workbookrangeborder.model';
import { WorkbookRangeFillModel } from './workbookrangefill.model';
import { WorkbookRangeFontModel } from './workbookrangefont.model';
import { EntityCollection } from './entity.collection';
import { WorkbookFormatProtectionCollection } from './workbookformatprotection.collection';
import { WorkbookRangeBorderCollection } from './workbookrangeborder.collection';
import { WorkbookRangeFillCollection } from './workbookrangefill.collection';
import { WorkbookRangeFontCollection } from './workbookrangefont.collection';
//#endregion

export interface WorkbookRangeFormat extends Entity {
  //#region ODataApi Properties
  columnWidth?: number;
  horizontalAlignment?: string;
  rowHeight?: number;
  verticalAlignment?: string;
  wrapText?: boolean;
  borders?: WorkbookRangeBorder[];
  fill?: WorkbookRangeFill;
  font?: WorkbookRangeFont;
  protection?: WorkbookFormatProtection;
  //#endregion
}
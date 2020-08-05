import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookFormatProtection } from './workbookformatprotection.entity';
import { WorkbookRangeBorder } from './workbookrangeborder.entity';
import { WorkbookRangeFill } from './workbookrangefill.entity';
import { WorkbookRangeFont } from './workbookrangefont.entity';
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
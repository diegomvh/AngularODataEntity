import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartFillModel } from './workbookchartfill.model';
import { WorkbookChartFontModel } from './workbookchartfont.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartFillCollection } from './workbookchartfill.collection';
import { WorkbookChartFontCollection } from './workbookchartfont.collection';
//#endregion

export interface WorkbookChartDataLabelFormat extends Entity {
  //#region ODataApi Properties
  fill?: WorkbookChartFill;
  font?: WorkbookChartFont;
  //#endregion
}
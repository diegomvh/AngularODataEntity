import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartFillModel } from './workbookchartfill.model';
import { WorkbookChartLineFormatModel } from './workbookchartlineformat.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartFillCollection } from './workbookchartfill.collection';
import { WorkbookChartLineFormatCollection } from './workbookchartlineformat.collection';
//#endregion

export interface WorkbookChartSeriesFormat extends Entity {
  //#region ODataApi Properties
  fill?: WorkbookChartFill;
  line?: WorkbookChartLineFormat;
  //#endregion
}
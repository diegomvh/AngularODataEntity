import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartFillModel } from './workbookchartfill.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartFillCollection } from './workbookchartfill.collection';
//#endregion

export interface WorkbookChartPointFormat extends Entity {
  //#region ODataApi Properties
  fill?: WorkbookChartFill;
  //#endregion
}
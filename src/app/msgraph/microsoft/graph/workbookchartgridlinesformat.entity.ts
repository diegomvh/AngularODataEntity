import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartLineFormatModel } from './workbookchartlineformat.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartLineFormatCollection } from './workbookchartlineformat.collection';
//#endregion

export interface WorkbookChartGridlinesFormat extends Entity {
  //#region ODataApi Properties
  line?: WorkbookChartLineFormat;
  //#endregion
}
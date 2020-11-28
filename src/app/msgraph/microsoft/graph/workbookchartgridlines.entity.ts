import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartGridlinesFormat } from './workbookchartgridlinesformat.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartGridlinesFormatModel } from './workbookchartgridlinesformat.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartGridlinesFormatCollection } from './workbookchartgridlinesformat.collection';
//#endregion

export interface WorkbookChartGridlines extends Entity {
  //#region ODataApi Properties
  visible: boolean;
  format?: WorkbookChartGridlinesFormat;
  //#endregion
}
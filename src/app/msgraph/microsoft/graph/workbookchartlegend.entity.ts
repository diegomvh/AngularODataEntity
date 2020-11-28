import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartLegendFormat } from './workbookchartlegendformat.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartLegendFormatModel } from './workbookchartlegendformat.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartLegendFormatCollection } from './workbookchartlegendformat.collection';
//#endregion

export interface WorkbookChartLegend extends Entity {
  //#region ODataApi Properties
  overlay?: boolean;
  position?: string;
  visible: boolean;
  format?: WorkbookChartLegendFormat;
  //#endregion
}
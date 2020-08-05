import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartLegendFormat } from './workbookchartlegendformat.entity';
//#endregion

export interface WorkbookChartLegend extends Entity {
  //#region ODataApi Properties
  overlay?: boolean;
  position?: string;
  visible: boolean;
  format?: WorkbookChartLegendFormat;
  //#endregion
}
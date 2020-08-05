import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.entity';
import { WorkbookChartAxisFormat } from './workbookchartaxisformat.entity';
import { WorkbookChartGridlines } from './workbookchartgridlines.entity';
import { WorkbookChartAxisTitle } from './workbookchartaxistitle.entity';
//#endregion

export interface WorkbookChartAxis extends Entity {
  //#region ODataApi Properties
  majorUnit?: Json;
  maximum?: Json;
  minimum?: Json;
  minorUnit?: Json;
  format?: WorkbookChartAxisFormat;
  majorGridlines?: WorkbookChartGridlines;
  minorGridlines?: WorkbookChartGridlines;
  title?: WorkbookChartAxisTitle;
  //#endregion
}
import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.entity';
import { WorkbookChartAxisFormat } from './workbookchartaxisformat.entity';
import { WorkbookChartGridlines } from './workbookchartgridlines.entity';
import { WorkbookChartAxisTitle } from './workbookchartaxistitle.entity';
import { JsonModel } from './json.model';
import { EntityModel } from './entity.model';
import { WorkbookChartAxisFormatModel } from './workbookchartaxisformat.model';
import { WorkbookChartGridlinesModel } from './workbookchartgridlines.model';
import { WorkbookChartAxisTitleModel } from './workbookchartaxistitle.model';
import { JsonCollection } from './json.collection';
import { EntityCollection } from './entity.collection';
import { WorkbookChartAxisFormatCollection } from './workbookchartaxisformat.collection';
import { WorkbookChartGridlinesCollection } from './workbookchartgridlines.collection';
import { WorkbookChartAxisTitleCollection } from './workbookchartaxistitle.collection';
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
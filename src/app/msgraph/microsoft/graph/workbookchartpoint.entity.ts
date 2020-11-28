import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { Json } from './json.complex';
import { WorkbookChartPointFormat } from './workbookchartpointformat.entity';
import { JsonModel } from './json.model';
import { EntityModel } from './entity.model';
import { WorkbookChartPointFormatModel } from './workbookchartpointformat.model';
import { JsonCollection } from './json.collection';
import { EntityCollection } from './entity.collection';
import { WorkbookChartPointFormatCollection } from './workbookchartpointformat.collection';
//#endregion

export interface WorkbookChartPoint extends Entity {
  //#region ODataApi Properties
  value?: Json;
  format?: WorkbookChartPointFormat;
  //#endregion
}
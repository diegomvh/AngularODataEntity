import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartAxisTitleFormat } from './workbookchartaxistitleformat.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartAxisTitleFormatModel } from './workbookchartaxistitleformat.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartAxisTitleFormatCollection } from './workbookchartaxistitleformat.collection';
//#endregion

export interface WorkbookChartAxisTitle extends Entity {
  //#region ODataApi Properties
  text?: string;
  visible: boolean;
  format?: WorkbookChartAxisTitleFormat;
  //#endregion
}
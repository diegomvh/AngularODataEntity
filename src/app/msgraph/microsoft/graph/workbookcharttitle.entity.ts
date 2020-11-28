import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartTitleFormat } from './workbookcharttitleformat.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartTitleFormatModel } from './workbookcharttitleformat.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartTitleFormatCollection } from './workbookcharttitleformat.collection';
//#endregion

export interface WorkbookChartTitle extends Entity {
  //#region ODataApi Properties
  overlay?: boolean;
  text?: string;
  visible: boolean;
  format?: WorkbookChartTitleFormat;
  //#endregion
}
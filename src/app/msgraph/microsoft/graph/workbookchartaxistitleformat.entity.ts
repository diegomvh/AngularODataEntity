import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartFontModel } from './workbookchartfont.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartFontCollection } from './workbookchartfont.collection';
//#endregion

export interface WorkbookChartAxisTitleFormat extends Entity {
  //#region ODataApi Properties
  font?: WorkbookChartFont;
  //#endregion
}
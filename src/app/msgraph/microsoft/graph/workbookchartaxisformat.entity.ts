import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { EntityModel } from './entity.model';
import { WorkbookChartFontModel } from './workbookchartfont.model';
import { WorkbookChartLineFormatModel } from './workbookchartlineformat.model';
import { EntityCollection } from './entity.collection';
import { WorkbookChartFontCollection } from './workbookchartfont.collection';
import { WorkbookChartLineFormatCollection } from './workbookchartlineformat.collection';
//#endregion

export interface WorkbookChartAxisFormat extends Entity {
  //#region ODataApi Properties
  font?: WorkbookChartFont;
  line?: WorkbookChartLineFormat;
  //#endregion
}
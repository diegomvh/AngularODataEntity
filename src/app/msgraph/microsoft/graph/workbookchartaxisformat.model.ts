import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { WorkbookChartAxisFormat } from './workbookchartaxisformat.entity';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { WorkbookChartFontModel } from './workbookchartfont.model';
import { WorkbookChartLineFormatModel } from './workbookchartlineformat.model';
import { WorkbookChartFontCollection } from './workbookchartfont.collection';
import { WorkbookChartAxisFormatCollection } from './workbookchartaxisformat.collection';
import { WorkbookChartLineFormatCollection } from './workbookchartlineformat.collection';
//#endregion

export class WorkbookChartAxisFormatModel<E extends WorkbookChartAxisFormat> extends EntityModel<E> {
  //#region ODataApi Properties
  font?: WorkbookChartFontModel<WorkbookChartFont>;
  line?: WorkbookChartLineFormatModel<WorkbookChartLineFormat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
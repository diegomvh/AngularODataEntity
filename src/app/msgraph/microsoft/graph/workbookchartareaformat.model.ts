import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartAreaFormat } from './workbookchartareaformat.entity';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { WorkbookChartFillModel } from './workbookchartfill.model';
import { WorkbookChartFontModel } from './workbookchartfont.model';
import { WorkbookChartAreaFormatCollection } from './workbookchartareaformat.collection';
import { WorkbookChartFillCollection } from './workbookchartfill.collection';
import { WorkbookChartFontCollection } from './workbookchartfont.collection';
//#endregion

export class WorkbookChartAreaFormatModel<E extends WorkbookChartAreaFormat> extends EntityModel<E> {
  //#region ODataApi Properties
  fill?: WorkbookChartFillModel<WorkbookChartFill>;
  font?: WorkbookChartFontModel<WorkbookChartFont>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
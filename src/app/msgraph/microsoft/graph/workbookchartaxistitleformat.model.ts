import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { WorkbookChartAxisTitleFormat } from './workbookchartaxistitleformat.entity';
import { WorkbookChartFontModel } from './workbookchartfont.model';
import { WorkbookChartFontCollection } from './workbookchartfont.collection';
import { WorkbookChartAxisTitleFormatCollection } from './workbookchartaxistitleformat.collection';
//#endregion

export class WorkbookChartAxisTitleFormatModel<E extends WorkbookChartAxisTitleFormat> extends EntityModel<E> {
  //#region ODataApi Properties
  font?: WorkbookChartFontModel<WorkbookChartFont>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
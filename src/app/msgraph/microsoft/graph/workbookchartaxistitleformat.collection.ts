import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { WorkbookChartAxisTitleFormat } from './workbookchartaxistitleformat.entity';
import { WorkbookChartFontModel } from './workbookchartfont.model';
import { WorkbookChartAxisTitleFormatModel } from './workbookchartaxistitleformat.model';
import { WorkbookChartFontCollection } from './workbookchartfont.collection';
//#endregion

export class WorkbookChartAxisTitleFormatCollection<E extends WorkbookChartAxisTitleFormat, M extends WorkbookChartAxisTitleFormatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
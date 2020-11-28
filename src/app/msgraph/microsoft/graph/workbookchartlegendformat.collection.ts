import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartFill } from './workbookchartfill.entity';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { WorkbookChartLegendFormat } from './workbookchartlegendformat.entity';
import { WorkbookChartFillModel } from './workbookchartfill.model';
import { WorkbookChartFontModel } from './workbookchartfont.model';
import { WorkbookChartLegendFormatModel } from './workbookchartlegendformat.model';
import { WorkbookChartFillCollection } from './workbookchartfill.collection';
import { WorkbookChartFontCollection } from './workbookchartfont.collection';
//#endregion

export class WorkbookChartLegendFormatCollection<E extends WorkbookChartLegendFormat, M extends WorkbookChartLegendFormatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
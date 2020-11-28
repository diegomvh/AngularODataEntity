import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartLegend } from './workbookchartlegend.entity';
import { WorkbookChartLegendFormat } from './workbookchartlegendformat.entity';
import { WorkbookChartLegendModel } from './workbookchartlegend.model';
import { WorkbookChartLegendFormatModel } from './workbookchartlegendformat.model';
import { WorkbookChartLegendFormatCollection } from './workbookchartlegendformat.collection';
//#endregion

export class WorkbookChartLegendCollection<E extends WorkbookChartLegend, M extends WorkbookChartLegendModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartLegend } from './workbookchartlegend.entity';
import { WorkbookChartLegendFormat } from './workbookchartlegendformat.entity';
import { WorkbookChartLegendFormatModel } from './workbookchartlegendformat.model';
import { WorkbookChartLegendCollection } from './workbookchartlegend.collection';
import { WorkbookChartLegendFormatCollection } from './workbookchartlegendformat.collection';
//#endregion

export class WorkbookChartLegendModel<E extends WorkbookChartLegend> extends EntityModel<E> {
  //#region ODataApi Properties
  overlay?: boolean;
  position?: string;
  visible: boolean;
  format?: WorkbookChartLegendFormatModel<WorkbookChartLegendFormat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
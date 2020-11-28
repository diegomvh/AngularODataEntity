import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartDataLabels } from './workbookchartdatalabels.entity';
import { WorkbookChartDataLabelFormat } from './workbookchartdatalabelformat.entity';
import { WorkbookChartDataLabelFormatModel } from './workbookchartdatalabelformat.model';
import { WorkbookChartDataLabelsCollection } from './workbookchartdatalabels.collection';
import { WorkbookChartDataLabelFormatCollection } from './workbookchartdatalabelformat.collection';
//#endregion

export class WorkbookChartDataLabelsModel<E extends WorkbookChartDataLabels> extends EntityModel<E> {
  //#region ODataApi Properties
  position?: string;
  separator?: string;
  showBubbleSize?: boolean;
  showCategoryName?: boolean;
  showLegendKey?: boolean;
  showPercentage?: boolean;
  showSeriesName?: boolean;
  showValue?: boolean;
  format?: WorkbookChartDataLabelFormatModel<WorkbookChartDataLabelFormat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
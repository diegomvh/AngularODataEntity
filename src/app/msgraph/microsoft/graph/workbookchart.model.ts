import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookChart } from './workbookchart.entity';
import { WorkbookChartAxes } from './workbookchartaxes.entity';
import { WorkbookChartDataLabels } from './workbookchartdatalabels.entity';
import { WorkbookChartAreaFormat } from './workbookchartareaformat.entity';
import { WorkbookChartLegend } from './workbookchartlegend.entity';
import { WorkbookChartSeries } from './workbookchartseries.entity';
import { WorkbookChartTitle } from './workbookcharttitle.entity';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookChartAxesModel } from './workbookchartaxes.model';
import { WorkbookChartDataLabelsModel } from './workbookchartdatalabels.model';
import { WorkbookChartAreaFormatModel } from './workbookchartareaformat.model';
import { WorkbookChartLegendModel } from './workbookchartlegend.model';
import { WorkbookChartSeriesModel } from './workbookchartseries.model';
import { WorkbookChartTitleModel } from './workbookcharttitle.model';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
import { WorkbookChartCollection } from './workbookchart.collection';
import { WorkbookChartAxesCollection } from './workbookchartaxes.collection';
import { WorkbookChartDataLabelsCollection } from './workbookchartdatalabels.collection';
import { WorkbookChartAreaFormatCollection } from './workbookchartareaformat.collection';
import { WorkbookChartLegendCollection } from './workbookchartlegend.collection';
import { WorkbookChartSeriesCollection } from './workbookchartseries.collection';
import { WorkbookChartTitleCollection } from './workbookcharttitle.collection';
//#endregion

export class WorkbookChartModel<E extends WorkbookChart> extends EntityModel<E> {
  //#region ODataApi Properties
  height: number;
  left: number;
  name?: string;
  top: number;
  width: number;
  axes?: WorkbookChartAxesModel<WorkbookChartAxes>;
  dataLabels?: WorkbookChartDataLabelsModel<WorkbookChartDataLabels>;
  format?: WorkbookChartAreaFormatModel<WorkbookChartAreaFormat>;
  legend?: WorkbookChartLegendModel<WorkbookChartLegend>;
  series?: WorkbookChartSeriesCollection<WorkbookChartSeries, WorkbookChartSeriesModel<WorkbookChartSeries>>;
  title?: WorkbookChartTitleModel<WorkbookChartTitle>;
  worksheet?: WorkbookWorksheetModel<WorkbookWorksheet>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
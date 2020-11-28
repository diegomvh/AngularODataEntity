import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookChart } from './workbookchart.entity';
import { WorkbookChartAxes } from './workbookchartaxes.entity';
import { WorkbookChartDataLabels } from './workbookchartdatalabels.entity';
import { WorkbookChartAreaFormat } from './workbookchartareaformat.entity';
import { WorkbookChartLegend } from './workbookchartlegend.entity';
import { WorkbookChartSeries } from './workbookchartseries.entity';
import { WorkbookChartTitle } from './workbookcharttitle.entity';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookChartModel } from './workbookchart.model';
import { WorkbookChartAxesModel } from './workbookchartaxes.model';
import { WorkbookChartDataLabelsModel } from './workbookchartdatalabels.model';
import { WorkbookChartAreaFormatModel } from './workbookchartareaformat.model';
import { WorkbookChartLegendModel } from './workbookchartlegend.model';
import { WorkbookChartSeriesModel } from './workbookchartseries.model';
import { WorkbookChartTitleModel } from './workbookcharttitle.model';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
import { WorkbookChartAxesCollection } from './workbookchartaxes.collection';
import { WorkbookChartDataLabelsCollection } from './workbookchartdatalabels.collection';
import { WorkbookChartAreaFormatCollection } from './workbookchartareaformat.collection';
import { WorkbookChartLegendCollection } from './workbookchartlegend.collection';
import { WorkbookChartSeriesCollection } from './workbookchartseries.collection';
import { WorkbookChartTitleCollection } from './workbookcharttitle.collection';
//#endregion

export class WorkbookChartCollection<E extends WorkbookChart, M extends WorkbookChartModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
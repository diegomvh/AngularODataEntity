import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { WorkbookWorksheet } from './workbookworksheet.entity';
import { WorkbookChartAxes } from './workbookchartaxes.entity';
import { WorkbookChartDataLabels } from './workbookchartdatalabels.entity';
import { WorkbookChartAreaFormat } from './workbookchartareaformat.entity';
import { WorkbookChartLegend } from './workbookchartlegend.entity';
import { WorkbookChartSeries } from './workbookchartseries.entity';
import { WorkbookChartTitle } from './workbookcharttitle.entity';
import { EntityModel } from './entity.model';
import { WorkbookWorksheetModel } from './workbookworksheet.model';
import { WorkbookChartAxesModel } from './workbookchartaxes.model';
import { WorkbookChartDataLabelsModel } from './workbookchartdatalabels.model';
import { WorkbookChartAreaFormatModel } from './workbookchartareaformat.model';
import { WorkbookChartLegendModel } from './workbookchartlegend.model';
import { WorkbookChartSeriesModel } from './workbookchartseries.model';
import { WorkbookChartTitleModel } from './workbookcharttitle.model';
import { EntityCollection } from './entity.collection';
import { WorkbookWorksheetCollection } from './workbookworksheet.collection';
import { WorkbookChartAxesCollection } from './workbookchartaxes.collection';
import { WorkbookChartDataLabelsCollection } from './workbookchartdatalabels.collection';
import { WorkbookChartAreaFormatCollection } from './workbookchartareaformat.collection';
import { WorkbookChartLegendCollection } from './workbookchartlegend.collection';
import { WorkbookChartSeriesCollection } from './workbookchartseries.collection';
import { WorkbookChartTitleCollection } from './workbookcharttitle.collection';
//#endregion

export interface WorkbookChart extends Entity {
  //#region ODataApi Properties
  height: number;
  left: number;
  name?: string;
  top: number;
  width: number;
  axes?: WorkbookChartAxes;
  dataLabels?: WorkbookChartDataLabels;
  format?: WorkbookChartAreaFormat;
  legend?: WorkbookChartLegend;
  series?: WorkbookChartSeries[];
  title?: WorkbookChartTitle;
  worksheet?: WorkbookWorksheet;
  //#endregion
}
import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Json } from './json.entity';
import { WorkbookChartAxis } from './workbookchartaxis.entity';
import { WorkbookChartAxisFormat } from './workbookchartaxisformat.entity';
import { WorkbookChartGridlines } from './workbookchartgridlines.entity';
import { WorkbookChartAxisTitle } from './workbookchartaxistitle.entity';
import { JsonModel } from './json.model';
import { WorkbookChartAxisFormatModel } from './workbookchartaxisformat.model';
import { WorkbookChartGridlinesModel } from './workbookchartgridlines.model';
import { WorkbookChartAxisTitleModel } from './workbookchartaxistitle.model';
import { JsonCollection } from './json.collection';
import { WorkbookChartAxisCollection } from './workbookchartaxis.collection';
import { WorkbookChartAxisFormatCollection } from './workbookchartaxisformat.collection';
import { WorkbookChartGridlinesCollection } from './workbookchartgridlines.collection';
import { WorkbookChartAxisTitleCollection } from './workbookchartaxistitle.collection';
//#endregion

export class WorkbookChartAxisModel<E extends WorkbookChartAxis> extends EntityModel<E> {
  //#region ODataApi Properties
  majorUnit?: JsonModel<Json>;
  maximum?: JsonModel<Json>;
  minimum?: JsonModel<Json>;
  minorUnit?: JsonModel<Json>;
  format?: WorkbookChartAxisFormatModel<WorkbookChartAxisFormat>;
  majorGridlines?: WorkbookChartGridlinesModel<WorkbookChartGridlines>;
  minorGridlines?: WorkbookChartGridlinesModel<WorkbookChartGridlines>;
  title?: WorkbookChartAxisTitleModel<WorkbookChartAxisTitle>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
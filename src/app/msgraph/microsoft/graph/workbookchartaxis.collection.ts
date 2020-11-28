import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Json } from './json.complex';
import { WorkbookChartAxis } from './workbookchartaxis.entity';
import { WorkbookChartAxisFormat } from './workbookchartaxisformat.entity';
import { WorkbookChartGridlines } from './workbookchartgridlines.entity';
import { WorkbookChartAxisTitle } from './workbookchartaxistitle.entity';
import { JsonModel } from './json.model';
import { WorkbookChartAxisModel } from './workbookchartaxis.model';
import { WorkbookChartAxisFormatModel } from './workbookchartaxisformat.model';
import { WorkbookChartGridlinesModel } from './workbookchartgridlines.model';
import { WorkbookChartAxisTitleModel } from './workbookchartaxistitle.model';
import { JsonCollection } from './json.collection';
import { WorkbookChartAxisFormatCollection } from './workbookchartaxisformat.collection';
import { WorkbookChartGridlinesCollection } from './workbookchartgridlines.collection';
import { WorkbookChartAxisTitleCollection } from './workbookchartaxistitle.collection';
//#endregion

export class WorkbookChartAxisCollection<E extends WorkbookChartAxis, M extends WorkbookChartAxisModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
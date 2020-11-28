import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartGridlines } from './workbookchartgridlines.entity';
import { WorkbookChartGridlinesFormat } from './workbookchartgridlinesformat.entity';
import { WorkbookChartGridlinesModel } from './workbookchartgridlines.model';
import { WorkbookChartGridlinesFormatModel } from './workbookchartgridlinesformat.model';
import { WorkbookChartGridlinesFormatCollection } from './workbookchartgridlinesformat.collection';
//#endregion

export class WorkbookChartGridlinesCollection<E extends WorkbookChartGridlines, M extends WorkbookChartGridlinesModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
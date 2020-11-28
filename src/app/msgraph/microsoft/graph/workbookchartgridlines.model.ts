import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartGridlines } from './workbookchartgridlines.entity';
import { WorkbookChartGridlinesFormat } from './workbookchartgridlinesformat.entity';
import { WorkbookChartGridlinesFormatModel } from './workbookchartgridlinesformat.model';
import { WorkbookChartGridlinesCollection } from './workbookchartgridlines.collection';
import { WorkbookChartGridlinesFormatCollection } from './workbookchartgridlinesformat.collection';
//#endregion

export class WorkbookChartGridlinesModel<E extends WorkbookChartGridlines> extends EntityModel<E> {
  //#region ODataApi Properties
  visible: boolean;
  format?: WorkbookChartGridlinesFormatModel<WorkbookChartGridlinesFormat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
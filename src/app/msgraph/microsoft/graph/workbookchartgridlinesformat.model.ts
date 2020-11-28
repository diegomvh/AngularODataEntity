import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { WorkbookChartGridlinesFormat } from './workbookchartgridlinesformat.entity';
import { WorkbookChartLineFormatModel } from './workbookchartlineformat.model';
import { WorkbookChartLineFormatCollection } from './workbookchartlineformat.collection';
import { WorkbookChartGridlinesFormatCollection } from './workbookchartgridlinesformat.collection';
//#endregion

export class WorkbookChartGridlinesFormatModel<E extends WorkbookChartGridlinesFormat> extends EntityModel<E> {
  //#region ODataApi Properties
  line?: WorkbookChartLineFormatModel<WorkbookChartLineFormat>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
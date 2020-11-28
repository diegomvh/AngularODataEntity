import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { WorkbookChartGridlinesFormat } from './workbookchartgridlinesformat.entity';
import { WorkbookChartLineFormatModel } from './workbookchartlineformat.model';
import { WorkbookChartGridlinesFormatModel } from './workbookchartgridlinesformat.model';
import { WorkbookChartLineFormatCollection } from './workbookchartlineformat.collection';
//#endregion

export class WorkbookChartGridlinesFormatCollection<E extends WorkbookChartGridlinesFormat, M extends WorkbookChartGridlinesFormatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
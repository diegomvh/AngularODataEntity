import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartLineFormat } from './workbookchartlineformat.entity';
import { WorkbookChartLineFormatModel } from './workbookchartlineformat.model';
//#endregion

export class WorkbookChartLineFormatCollection<E extends WorkbookChartLineFormat, M extends WorkbookChartLineFormatModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
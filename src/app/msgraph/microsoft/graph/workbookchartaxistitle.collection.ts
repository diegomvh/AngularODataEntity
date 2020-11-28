import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartAxisTitle } from './workbookchartaxistitle.entity';
import { WorkbookChartAxisTitleFormat } from './workbookchartaxistitleformat.entity';
import { WorkbookChartAxisTitleModel } from './workbookchartaxistitle.model';
import { WorkbookChartAxisTitleFormatModel } from './workbookchartaxistitleformat.model';
import { WorkbookChartAxisTitleFormatCollection } from './workbookchartaxistitleformat.collection';
//#endregion

export class WorkbookChartAxisTitleCollection<E extends WorkbookChartAxisTitle, M extends WorkbookChartAxisTitleModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}
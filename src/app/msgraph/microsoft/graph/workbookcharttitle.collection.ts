import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookChartTitle } from './workbookcharttitle.entity';
import { WorkbookChartTitleFormat } from './workbookcharttitleformat.entity';
import { WorkbookChartTitleModel } from './workbookcharttitle.model';
import { WorkbookChartTitleFormatModel } from './workbookcharttitleformat.model';
import { WorkbookChartTitleFormatCollection } from './workbookcharttitleformat.collection';
//#endregion

export class WorkbookChartTitleCollection<E extends WorkbookChartTitle, M extends WorkbookChartTitleModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}